import { productsTypes } from "../types";

export function fillProducts(products){
    return{
        type: productsTypes.FILL_PRODUCTS,
        payload: {
            products
        }
    }
}

export function getProducts() {
    return async function (dispatch) {
        const data = await fetch('/products.json')
        .then(res => res.json());
        dispatch(fillProducts(data))
    }
}

