import React from "react";
import ReactDom from "react-dom";
import TodoApp from "./components/TodoApp";
import "./App.css";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from './components/store/reducers';
const store = createStore(rootReducer);
ReactDom.render(<Provider store={store}>
    <TodoApp />
     </Provider>,document.getElementById("root"));