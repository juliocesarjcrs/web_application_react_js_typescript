import React from 'react';
import './App.css';
import Layout from './components/Layout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import CreateSale from './components/CreateSale';
import SaleList from './components/SaleList';
import DailySales from './components/DailySales';
import MonthlySales from './components/MonthlySales';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/sales" element={<SaleList />} />
          <Route path="/create-sale" element={<CreateSale />} />
          <Route path="/daily-sales" element={<DailySales />} />
          <Route path="/monthly-sales" element={<MonthlySales />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
