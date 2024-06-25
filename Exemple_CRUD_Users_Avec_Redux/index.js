import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./config/reducer";
import App from "./App";


const store = legacy_createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
    <App/>
</Provider>)