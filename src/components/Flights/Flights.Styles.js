import styled from "styled-components";
import image from "../../assets/plane-background.jpg";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  box-sizing: border-box;
  transition: all 0.2s ease 0s;
  font-size: 2vw;
  color: white;
  margin: 1rem 1rem 3rem 1rem;
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

const Board = styled.div`
  border: 0.3rem solid white;
  box-shadow: 0 8px 6px -6px black;
  padding: 1rem 0px;
  margin: 0px 1rem;
  background: rgb(68, 68, 68);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Flights = styled.div`
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.7),
    rgba(88, 88, 88, 0.7)
  ),url("${image}");
  background-size: cover; 
  background-position: center;
  padding: 1rem 0px 5rem 0px;
  flex-grow: 1;
`;

const Error = styled.div`
  font-size: 2vw;
`;

export { FlexWrapper, Button, Board, Flights, Error };
