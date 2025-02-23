import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './components/app/Header';
import { Hero } from './components/app/Hero';
import { ProductGrid } from './components/app/ProductGrid';
import { ProductModal } from './components/app/ProductModal';
import { Features } from './components/app/Features';
import { Footer } from './components/app/Footer';
import { Banner } from "./components/app/Banner";
import { 
  fetchAllProducts, 
  fetchAllCategories,
  fetchProductById,
  fetchProductsForCategory,
  clearSelectedProduct
} from './store/slices/productSlice';
import { incrementCart } from './store/slices/cartSlice';

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const categories = useSelector(state => state.products.categories);
  const selectedProduct = useSelector(state => state.products.selectedProduct);
  const cartCount = useSelector(state => state.cart.count);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(()=>{
    console.log("products; ", products)
    console.log("categories: ", categories)
    console.log("selectedProduct: ", selectedProduct)
    console.log("searchQuery ", searchQuery)
  },[categories, products, selectedProduct, searchQuery])
  
  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const handleProductClick = (productId) => {
    dispatch(fetchProductById(productId));
  };

  const handleAddToCart = () => {
    dispatch(incrementCart());
    dispatch(clearSelectedProduct());
  };

  const handleCategorySelect = (category) => {
    dispatch(fetchProductsForCategory(category));
  };

  return (
    <div className="bg-white text-black w-full">
      <Header 
        cartCount={cartCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        onCategorySelect={handleCategorySelect}
      />
      <Hero />
      <Banner />
      <ProductGrid 
        products={products}
        onProductClick={handleProductClick}
      />
      <hr />
      <Features />
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => dispatch(clearSelectedProduct())}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default App;
