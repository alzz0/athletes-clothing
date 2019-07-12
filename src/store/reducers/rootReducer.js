import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import directoryReducer from "../directory/directoryReducer";
import shopReducer from "./shopReducer"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
    collections:shopReducer
});

export default persistReducer(persistConfig, rootReducer);
