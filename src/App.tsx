import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Play, Code, Star, MessageSquare, ShoppingCart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import AdminPage from './pages/AdminPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<{id: string, name: string, price: number}[]>([]);
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    // Check if the current path is /admin
    const path = window.location.pathname;
    if (path === '/admin') {
      setIsAdminRoute(true);
    }

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const addToCart = (service: {id: string, name: string, price: number}) => {
    setCart([...cart, service]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  if (isAdminRoute) {
    return <AdminPage />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <Services addToCart={addToCart} />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        removeFromCart={removeFromCart} 
      />
    </div>
  );
}

export default App;