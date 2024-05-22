import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import './Navbar.css';
const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <DropdownMenu title="Productos">
            <Link to="/products">Listado de Productos</Link>
            <Link to="/create-product">Crear Producto</Link>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu title="Usuarios">
            <Link to="/users">Listado de Usuarios</Link>
            <Link to="/create-user">Crear Usuario</Link>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu title="Ventas">
            <Link to="/sales">Listado de Ventas</Link>
            <Link to="/create-sale">Crear Venta</Link>
            <Link to="/daily-sales">Ventas Diarias</Link>
            <Link to="/monthly-sales">Ventas Mensuales</Link>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
