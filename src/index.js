import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  //pass the store through provide like usual
  <Provider store={store}>
    {/* wrap the main component inside persist gate. This will delay our apps UI till the persisted state has been saved to redux */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


reportWebVitals();
