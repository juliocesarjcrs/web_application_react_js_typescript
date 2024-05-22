import React, { useState } from 'react';
import { createProducts } from '../services/products';

const CreateProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !description || !price) {
      setError('Por favor llene todos los campos.');
      return;
    }

    try {
      await createProducts({
        name,
        description,
        price: parseFloat(price),
      });
      setName('');
      setDescription('');
      setPrice('');
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Error al crear producto');
    }
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Descripción</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Precio</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateProduct;
