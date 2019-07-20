import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainLayoutReducer from "./store/mainLayout/reducer";
import MainLayout from "./components/elements/MainLayout";

const store = createStore(mainLayoutReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainLayout />
        </div>
      </Provider>
    );
  }
}

export default App;
