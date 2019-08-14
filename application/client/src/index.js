import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// import reducers
import loginReducer from "./components/redux/reducers/loginReducer";
import registerReducer from "./components/redux/reducers/registerReducer";
import userauthReducer from "./components/redux/reducers/userauthReducer"
import postReducer from "./components/redux/reducers/postReducer"

// combine reducers
const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  userauthReducer,
  postReducer
});


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
