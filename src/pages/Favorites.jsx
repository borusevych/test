import { useState } from "react";
import ModalAddToCard from "../components/Modal/ModalAddToCart";
import {Link} from 'react-router-dom';

export default function Favorites(props) {
    const [modalItem, setModalItem] = useState(null);

    function handleAddToCart(item) {
        setModalItem(item);
    }

    function closeModal() {
        setModalItem(null);
    }

    return (
    <>

        
        <div className="list-wrapper">
        <h1 style={{justifySelf: 'flex-start'}}>Favorites</h1>
            {props.favorites.length ===0? (<p style={{fontSize: '20px'}}>Favorites list is empty</p>): (<></>)}
            <ul className="list" style={{ listStyleType: 'none', display: 'flex', flexWrap: 'wrap', padding: '0' }}>
                {props.favorites.map(item => {
                    const isFavorite = props.favorites.some(fav => fav.sku === item.sku);
                    const isInCart = props.cart.some(cart => cart.sku === item.sku);

                    return (
                        <li key={item.sku} style={{ margin: '10px' }}>
                            <Link to={`../user/${item.sku}`} name={item.name} style={{color: 'black'}}>
                                <img src={item.imageUrl} style={{ width: '400px' }} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>$ {item.price}</p>
                            </Link>
                            <div className="list__buttons">
                                {
                                    isFavorite ?
                                        <button className="button-favorite" onClick={() => props.removeFromFavorites(item)}>★</button>
                                        :
                                        <button className="button-favorite" onClick={() => props.addToFavorites(item)}>☆</button>
                                }
                                {
                                    isInCart ? 
                                    <p style={{margin: '0'}}>In cart</p>
                                    :
                                    <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                                }
                            </div>
                        </li>
                    );
                })}
            </ul>
            {modalItem && <ModalAddToCard 
            item={modalItem} 
            onClose={closeModal} 
            addToCart={props.addToCart}
            />}
        </div>
            </>
    );
}