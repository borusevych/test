import { productsTypes } from "../types";

const initialState = {
    productsData: [],
    currentPage: 1
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case productsTypes.FILL_PRODUCTS:
            return {
                ...state,
                productsData: action.payload.products
            }
        default:
            return state;
    }
}
