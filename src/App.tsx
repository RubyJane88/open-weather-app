import React from "react";
import { configureAppStore } from "./store/configureStore";
// import "./App.css";
import "../src/app/components/styledComponents/styles.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
