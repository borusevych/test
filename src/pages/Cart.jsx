import { useState, useEffect } from "react";
import ModalRemoveFromCart from "../components/Modal/ModalRomoveFromCart";
import PurchaseForm from "../components/PurchaseForm/PurchaseForm";


export default function Cart(props) {
    const [modalItem, setModalItem] = useState(null);

    function handleRemoveFromCart(item) {
        setModalItem(item);
    }

    function closeModal() {
        setModalItem(null);
    }
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = props.cart.reduce((sum, item) => sum + item.price, 0);
        setTotal(newTotal);
    }, [props.cart])

   
    return (
        <>
            
            <div className="cart">
                <div>
                    <h1 style={{width: 'max-content', margin: '34px, 0, 54px, 0'}}>Cart</h1>
                    {props.cart.length ===0? (<p style={{fontSize: '20px'}}>Cart is empty</p>): (<></>)}
                    <ul  className="cart__list">
                        {props.cart.map(item => {
                            const isFavorite = props.favorites.some(fav => fav.sku === item.sku);

                            return (

                                <li className="cart__list-item" key={item.sku} style={{ margin: '10px' }}>
                                    <img src={item.imageUrl} style={{ width: '150px' }} alt={item.name} />
                                    <div  className="cart__list-item-info">
                                        <div  className="cart__list-item-description">
                                            <h2 style={{fontSize: '15px', margin: '0'}}>{item.name}</h2>
                                            <p style={{fontSize: '15px', margin: '0', fontWeight: 'bold'}}>$ {item.price}</p>
                                        </div>

                                    
                                        <div>
                                            {/* {
                                                isFavorite ?
                                                    <button className="button-favorite" onClick={() => props.removeFromFavorites(item)}>★</button>
                                                    :
                                                    <button className="button-favorite" onClick={() => props.addToFavorites(item)}>☆</button>
                                            } */}
                                            <button onClick={() => handleRemoveFromCart(item)}>Remove from cart</button>
                                        </div>
                                    </div>
                                    
                                </li>
                            );
                        })}
                    </ul>
                    {props.cart.length ===0? (<></>): (<p style={{fontSize: '25px', fontWeight: 'bold', marginBottom: '100px'}}>Total: ${total}</p>)}
                    
                    {modalItem && <ModalRemoveFromCart 
                    item={modalItem} 
                    onClose={closeModal} 
                    removeFromCart={props.removeFromCart}
                    />}
                </div>
                {props.cart.length ===0? (<></>): (<PurchaseForm/>)}
                
            </div>
        </>
    );
}