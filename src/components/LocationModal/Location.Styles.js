import styled from "styled-components";

const Header = styled.div`
  font-size: 2em;
  margin: 0px 0px 20px 0px;
`;

const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.2s ease 0s;
  font-size: 2vw;
  color: white;
  margin: 30px 10px;
  padding: 10px;
  background: black;
  text-align: center;
  font-family: monospace;
  border: 2px solid white;
  box-shadow: 0 8px 6px -6px black

  :active {
    transform: translateY(4px);
  }
  :hover {
    border: 2px solid black;
    background: white;
    color: black;
  }
  :focus {
    outline: none;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  div:first-child {
    position: relative !important;
    height: 100%;
    `;

const FlexWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export { Header, Button, FlexWrapper, MapWrapper };
