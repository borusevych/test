import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getProducts} from '../../redux/actions/products';
import ModalAddToCard from "../Modal/ModalAddToCart";

export default function Product(props) {

    const { productSku } = useParams();
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsData);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0) {
            const theProduct = products.find(p => p.sku === productSku);
            setProduct(theProduct);
        }
    }, [products, productSku]);

    const [modalItem, setModalItem] = useState(null);
    function handleAddToCart(item) {
        setModalItem(item);
    }
    function closeModal() {
        setModalItem(null);
    }


    if (!product) {
        return <div className="list__item-wrapper">Loading...</div>;
    }

    const isFavorite = props.favorites.some(fav => fav.sku === product.sku);
    const isInCart = props.cart.some(cart => cart.sku === product.sku);

    return (
        <div className="list__item-wrapper">
            <img src={product.imageUrl} style={{ width: '500px' }} alt={product.name} />
            <div className="list__item">
                <div  className="list__item-description">
                    <h2 style={{fontSize: '25px'}}>{product.name}</h2>
                    <p  style={{fontSize: '15px'}}>Price: $ {product.price}</p>
                </div>

                <div className="list__buttons">
                    {
                        isFavorite ?
                            <button className="button-favorite" onClick={() => props.removeFromFavorites(product)}>★</button>
                            :
                            <button className="button-favorite" onClick={() => props.addToFavorites(product)}>☆</button>
                    }
                    {
                        isInCart ? 
                        <p style={{ margin: '0' }}>In cart</p>
                        :
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    }
                </div>                                
            </div>
            {modalItem && <ModalAddToCard 
                item={modalItem} 
                onClose={closeModal} 
                addToCart={props.addToCart}
            />}
        </div>
    );
}

