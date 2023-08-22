import { products } from './mocks/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters';
import { Filters } from './components/Filters'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<>
          <Filters />
          <Products products={filteredProducts} />
        </>} />
        <Route path='/products/:category' element={<Products products={filteredProducts} />} />
        <Route path="/products/:category/:id" element={<ProductDetail products={filteredProducts} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
