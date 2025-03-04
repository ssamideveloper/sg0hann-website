import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    const [cart, setCart] = useState<{ id: string; name: string; price: number }[]>([]);

    const addToCart = (service: { id: string; name: string; price: number }) => {
      setCart([...cart, service]);
      setIsCartOpen(true);
    };

    const removeFromCart = (id: string) => {
      setCart(cart.filter((item) => item.id !== id));
    };

    return (
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services addToCart={addToCart} />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>

          <Footer />

          <CartModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            removeFromCart={removeFromCart}
          />
        </div>
      </Router>
    );
  }

  export default App;
