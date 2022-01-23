import CartActionTypes from "./cart.types";
import { addItemCart, removeItemFromCart } from "./cart.utils";

const INITITAL_STATE = {
    hidden : true,
    cartItems : [],
};

const CartReducer = (state = INITITAL_STATE, action) => {

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden,
            }
        case CartActionTypes.ADD_ITEM :
            return{
                ...state,
                cartItems : addItemCart(state.cartItems, action.payload),
            }
        case CartActionTypes.REMOVE_ITEM :
            return {
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            }    
        case CartActionTypes.CLEAR_ITEM_FROM_CART :
            return{
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id),
            }
            
        default:
            return state;
    }
}

export default CartReducer;