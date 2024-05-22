import React, { useEffect, useState } from 'react';
import { getTotalSalesByMonth } from '../services/sale';

const MonthlySales: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [totalSales, setTotalSales] = useState<number | null>(null);

  useEffect(() => {
    fetchSalesData();
  }, [year, month]);

  const fetchSalesData = async () => {
    try {
      const { data } = await getTotalSalesByMonth(year, month);
      setTotalSales(data.total);
    } catch (error) {
      console.error('Error fetching monthly sales data:', error);
    }
  };

  return (
    <div>
      <h2>Balance Mensual de Ventas</h2>
      <div>
        <label>Año: </label>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Mes: </label>
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(parseInt(e.target.value))}
        />
      </div>
      {totalSales !== null && (
        <div>
          <p>
            Total de ventas en {year}-{month}: ${totalSales}
          </p>
        </div>
      )}
    </div>
  );
};

export default MonthlySales;
