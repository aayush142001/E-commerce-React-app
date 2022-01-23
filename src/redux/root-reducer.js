import { combineReducers} from 'redux';

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userReducer from "./user/user.reducers";
import CartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart'],
}

const rootReducer = combineReducers({   // this is the root reducer ( the main pure function made up of combined individual functions)
    user : userReducer,
    cart : CartReducer,
    directory : directoryReducer,
    shop : shopReducer,
});

export default persistReducer(persistConfig, rootReducer);