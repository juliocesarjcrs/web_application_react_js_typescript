import React, { useEffect, useState } from 'react';
import { Sale } from '../interfaces/sale.interface';
import { getSalesList, deleteSale } from '../services/sale';
import '../styles/SaleList.css';

const SaleList: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await getSalesList();
      setSales(data);
    } catch (error) {
      setError('Error al obtener las ventas');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSale(id);
      setSales(sales.filter((sale) => sale.id !== id));
    } catch (error) {
      setError('Error al eliminar la venta');
    }
  };

  return (
    <div>
      <h2>Lista de Ventas</h2>
      {error && <div className="error">{error}</div>}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Fecha</th>
            <th>Vendedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale?.product?.name}</td>
              <td>{sale.qty}</td>
              <td>{sale?.product?.price}</td>
              <td>{new Date(sale.sale_at).toLocaleDateString()}</td>
              <td>{sale.user.name}</td>
              <td>
                <button onClick={() => handleDelete(sale.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleList;
