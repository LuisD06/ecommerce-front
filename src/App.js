import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Brands } from './components/brands/Brands';
import Layout from './components/layout/Layout';
import { Products } from './components/products/Products';
import { ProductTypes } from './components/productTypes/ProductTypes';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/brands" element={<Brands />}></Route>
            <Route path="/productTypes" element={<ProductTypes />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
