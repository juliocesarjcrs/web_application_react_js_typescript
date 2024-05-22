import React, { useState, useEffect } from 'react';
import { getProductsList } from '../services/products';
import { getUsersList } from '../services/users';
import { createSale } from '../services/sale';

const CreateSale: React.FC = () => {
  const [productsId, setProductsId] = useState('');
  const [qty, setQty] = useState(0);
  const [usersId, setUsersId] = useState('');
  const [products, setProducts] = useState<{ id: string; name: string }[]>([]);
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: productsData } = await getProductsList();
    setProducts(productsData);

    const { data: usersData } = await getUsersList();
    setUsers(usersData);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!productsId || !qty || !usersId) {
      setError('Por favor llene todos los campos.');
      return;
    }

    try {
      await createSale({
        products_id: productsId,
        qty,
        users_id: usersId,
      });
      setProductsId('');
      setQty(0);
      setUsersId('');
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error al crear venta');
    }
  };

  return (
    <div>
      <h2>Crear Venta</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Producto</label>
          <select
            value={productsId}
            onChange={(e) => setProductsId(e.target.value)}
          >
            <option value="">Seleccionar producto</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Cantidad</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <label>Usuario</label>
          <select value={usersId} onChange={(e) => setUsersId(e.target.value)}>
            <option value="">Seleccionar usuario</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateSale;
