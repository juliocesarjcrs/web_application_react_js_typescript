import React, { useEffect, useState } from 'react';
import { getUsersList, deleteUser } from '../services/users';
import { User } from '../interfaces/user.interface';
import { Role } from '../interfaces/role.interface';
import '../styles/UserList.css';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: usersData } = await getUsersList();
    setUsers(usersData);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAssignRole = async (userId: string, roleId: string) => {
    try {
      // await assignRole(userId, roleId);
    } catch (error) {
      console.error('Error assigning role:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Documento</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.last_name}</td>
              <td>{user.document}</td>
              <td>{user.role.name}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
