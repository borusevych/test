import { useState } from "react";
import ModalAddToCard from "../Modal/ModalAddToCart";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../../redux/actions/products';
import { useEffect } from "react";
import Product from "../Product/Product";
import {Link} from 'react-router-dom';


export default function Goods(props) {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsData);

    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch]);

    const [modalItem, setModalItem] = useState(null);
    const [product, setProduct] =useState('');

    function handleProduct(item) {
        setProduct(item)
    }

    function handleAddToCart(item) {
        setModalItem(item);
    }

    function closeModal() {
        setModalItem(null);
    }

    return (
        <div className="list-wrapper">
            <h1>In The Limelight</h1>
            <ul className="list" >
                {products.map(item => {
                    const isFavorite = props.favorites.some(fav => fav.sku === item.sku);
                    const isInCart = props.cart.some(cart => cart.sku === item.sku);

                    return (
                        <li key={item.sku} style={{ margin: '10px' }} onClick={() => handleProduct(item)}>
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
            {product && <Product/>}
        </div>
    );
}