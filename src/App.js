import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyle } from "./App.Styles";
import Header from "./components/Header/Header";
import Flights from "./components/Flights/Flights";
import Footer from "./components/Footer/Footer";
import * as S from "./App.Styles";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <S.App>
        <Header />
        <Flights />
        <Footer />
      </S.App>
    </Provider>
  );
}

export default App;
