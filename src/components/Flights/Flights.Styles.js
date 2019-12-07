import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 1.2rem;
  color: white;
  margin: 10px;
  padding: 10px;

  border-radius: 0.05em;
  border: 0.01em solid #444;
  position: relative;
  background: #222;
  text-align: center;
  line-height: 1;
  color: #fff;
  font-family: monospace;
  box-shadow: 0px 0.02em 0 #ccc, 0px 0.05em 0 #000;
  text-shadow: -1px -2px 2px rgba(0, 0, 0, 1);
  z-index: 50;

  :active {
    transform: translateY(4px);
  }
  :focus {
    outline: none;
  }
`;

const Board = styled.div`
  border: 3px solid black;
`;

export { FlexWrapper, Button, Board };
