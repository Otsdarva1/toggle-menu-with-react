import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import toggleMenu from "./reducers";

const store = createStore(toggleMenu);

// console.log(store);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch({ type: "TOGGLE_MENU" });
// store.dispatch({ type: "TOGGLE_MENU" });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
