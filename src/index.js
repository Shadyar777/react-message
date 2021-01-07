import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// import { addPostActiveCreact, updateNewPostTextActionCreat } from "./redux/state";

// let renderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App dispatch={store.dispatch.bind(store)} store={store} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
// };

// renderEntireTree();

// TODO
// store.subscribe(() => {
//   let state = store.getState();
//   renderEntireTree(state);
// });
//  У connect-та есть свой 'subscribe', и по этому мы удаляем store.subscribe()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
