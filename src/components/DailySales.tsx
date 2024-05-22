import React, { useEffect, useState } from 'react';
import { getTotalSalesValueByDay } from '../services/sale';

const DailySales: React.FC = () => {
  const [date, setDate] = useState('');
  const [totalSales, setTotalSales] = useState<number | null>(null);

  useEffect(() => {
    if (date) {
      fetchSalesData();
    }
  }, [date]);

  const fetchSalesData = async () => {
    try {
      const { data } = await getTotalSalesValueByDay(date);
      setTotalSales(data.total);
    } catch (error) {
      console.error('Error fetching daily sales data:', error);
    }
  };

  const handleButtonClick = () => {
    fetchSalesData();
  };

  return (
    <div>
      <h2>Total de Ventas Diarias</h2>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleButtonClick}>Consultar</button>
      </div>
      {totalSales !== null && (
        <div>
          <p>
            Total de ventas el {date}: ${totalSales}
          </p>
        </div>
      )}
    </div>
  );
};

export default DailySales;
