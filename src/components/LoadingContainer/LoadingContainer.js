import React from "react";
import { GridLoader } from "react-spinners";

import * as S from "./LoadingContainer.Styles";

function LoadingContainer() {
  return (
    <S.LoaderWrapper>
      <GridLoader loading={true} color={"#FFF"} />
      <S.Paragraph>LOADING GOOGLE MAP</S.Paragraph>
    </S.LoaderWrapper>
  );
}

export default LoadingContainer;
