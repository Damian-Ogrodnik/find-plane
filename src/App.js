import React from "react";
import Header from "./components/Header/Header";
import Flights from "./components/Flights/Flights";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Flights />
      </div>
    </Provider>
  );
}

export default App;
