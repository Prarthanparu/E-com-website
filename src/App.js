import React from "react";
import "./App.less";
import { createStore, applyMiddleware } from "redux";
import Header from "./components/Header/index";
import { Provider } from "react-redux";

const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
