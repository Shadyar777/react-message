import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StareContext";

// import { addPostActiveCreact, updateNewPostTextActionCreat } from "./redux/state";

let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
