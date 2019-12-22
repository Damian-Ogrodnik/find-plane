import React from "react";

import * as S from "./BoardHeader.Styles";

const BoardHeader = () => {
  const FlightNumber = "FLIGHT NUMBER";
  const Country = "   ORIGIN COUNTRY ";
  const Distance = "   DISTANCE-KM";
  let createdCells = 0;

  const renderLetters = category => {
    const lettersArray = category.split("");
    createdCells += lettersArray.length;
    return lettersArray.map(letter => (
      <S.Letter key={Math.random()}>{letter}</S.Letter>
    ));
  };

  const renderSpaceBar = () => {
    const spaceBar = [];
    for (let i = 0; i < createdCells; i++) {
      spaceBar.push(<S.Letter key={Math.random()} />);
    }
    return spaceBar;
  };

  return (
    <React.Fragment>
      <S.BoardHeader>
        <S.Column>{renderLetters(FlightNumber)}</S.Column>
        <S.Column>{renderLetters(Country)}</S.Column>
        <S.Column>{renderLetters(Distance)}</S.Column>
      </S.BoardHeader>
      <S.BoardHeader>
        <S.Column>{renderSpaceBar()}</S.Column>
      </S.BoardHeader>
    </React.Fragment>
  );
};

export { BoardHeader };
