import { combineReducers } from "redux";
import { productsReducer } from "./reducers/products";

export const rootReducer = combineReducers({
    products: productsReducer
});
