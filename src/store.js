import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//initial state of redux store
const initialState = { count: 0 };


//syntax of config file required for redux-persist
const persistConfig = {
  key: "root",
  storage,
};


//redux reducer
const a = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}; 


//change the redux reducer into a persisting reducer using config variable
const persistedReducer = persistReducer(persistConfig, a);

//when creating store pass the persisting reducer instead of the regular redux reducer
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


//send the created store through persiststore (needed for redux-persist)
export const persistor = persistStore(store);
