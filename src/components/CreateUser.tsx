import React, { useState, useEffect } from 'react';
import { getRolesList } from '../services/role';
import { createUser } from '../services/users';

const CreateUser: React.FC = () => {
  const [document, setDocument] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [roleId, setRoleId] = useState('');
  const [roles, setRoles] = useState<{ id: string; name: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await getRolesList();
    setRoles(data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!document || !lastName || !name || !roleId) {
      setError('Por favor llene todos los campos.');
      return;
    }

    try {
      await createUser({
        document,
        last_name: lastName,
        name,
        role: roleId,
      });
      alert('Usuario creado exitosamente');
      setDocument('');
      setLastName('');
      setName('');
      setRoleId('');
      setError(null);
    } catch (error) {
      console.error('error', error);
      setError('Error al crear usuario');
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Documento</label>
          <input
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Nombre</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Rol</label>
          <select value={roleId} onChange={(e) => setRoleId(e.target.value)}>
            <option value="">Seleccionar rol</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateUser;
