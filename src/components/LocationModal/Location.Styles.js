import styled from "styled-components";

const Header = styled.div`
  font-size: 3rem;
  margin: 0px 0px 2rem 0px;
`;

const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.2s ease 0s;
  font-size: 3rem;
  color: white;
  margin: 3rem 1rem;
  padding: 1rem;
  background: black;
  text-align: center;
  font-family: monospace;
  border: 0.2rem solid white;
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

const CloseButton = styled(Button)`
  display: flex;
  position: absolute;
  top: 2rem;
  right: 2rem;
  margin: 0;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
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

export { Header, Button, FlexWrapper, MapWrapper, CloseButton };
