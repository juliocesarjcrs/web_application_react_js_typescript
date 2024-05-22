import React, { useEffect, useState } from 'react';
import { getUsersList } from '../services/users';
import { setAuthHeader } from '../plugins/axios.config';

interface User {
  id: string;
  name: string;
  last_name: string;
}

const UserSelect: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await getUsersList();
    setUsers(data);
  };
  const handleUserSelect = (userId: string) => {
    setSelectedUser(userId);
    setAuthHeader(userId);
  };

  return (
    <div>
      <label htmlFor="user-select">
        Seleccionar Usuario que realizará la acción:{' '}
      </label>
      <select
        id="user-select"
        value={selectedUser}
        onChange={(e) => handleUserSelect(e.target.value)}
      >
        <option value="">Seleccionar</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} {user.last_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelect;
