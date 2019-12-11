import styled from "styled-components";

const Header = styled.div`
  font-size: 2em;
`;

const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.2s ease 0s;
  font-size: 2vw;
  color: white;
  margin: 10px 10px 30px 10px;
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

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { Header, Button, FlexWrapper };
