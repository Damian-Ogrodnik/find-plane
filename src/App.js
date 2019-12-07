import React from "react";
import Header from "./components/Header/Header";
import Flights from "./components/Flights/Flights";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./App.Styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Flights />
      </div>
    </Provider>
  );
}

export default App;
