import { NavLink, Routes, Route } from "react-router-dom";
import Favorites from "../../pages/Favorites";
import Cart from "../../pages/Cart";
import Home from "../../pages/Home";
import Product from "../Product/Product";


export default function Header({favorites, addToFavorites, removeFromFavorites, cart, addToCart, removeFromCart}) {

    return (
        <>

        <header>
            <div className="header">
                <NavLink to="/"><img src="/images/Logo.jpg" alt="logo" /></NavLink>
                <div className="header-items">
                    <NavLink className="header-items__link" to='/' style={{marginRight: '30px'}}>Home</NavLink>
                    <NavLink className="header-items__link" to='/favorites' style={{marginRight: '30px'}}>Favorites {favorites.length}</NavLink>
                    <NavLink className="header-items__link" to='/cart'>Cart {cart.length}</NavLink>
                </div>
            </div>
        </header>
        <Routes>
                <Route path='/' element={<Home
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    cart={cart}
                    addToCart={addToCart}
                />} />
                <Route path='/favorites' element={<Favorites 
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    cart={cart}
                    addToCart={addToCart}
                />} />
                <Route path='/cart' element={<Cart 
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />} />
                <Route path="/user/:productSku" element={<Product
                    favorites={favorites}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />}/>
            </Routes>
        
        </>
        
    );
}