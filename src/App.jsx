
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart? JSON.parse(savedCart) : [];
  })
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  function addToFavorites(item) {
      setFavorites([...favorites, item]);
  }

  function removeFromFavorites(item) {
      setFavorites(favorites.filter(fav => fav.sku !== item.sku));
  }

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function removeFromCart(item) {
    setCart(cart.filter(cartItem=> cartItem.sku !==item.sku))
  }

  return(
    <>
      <Header
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </>
  )
}

export default App;