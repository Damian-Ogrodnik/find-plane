import styled from "styled-components";

const BoardHeader = styled.div`
  display: flex;
  margin: 0.2rem;
`;

const Column = styled.div`
  font-size: 2.2vw;
  display: flex;
  allign-items: center;
`;

const Letter = styled.div`
  background: #444;
  width: 1em;
  height: 1em;
  display: inline-block;
  margin: 0 auto;
  border-radius: 0.05em;
  border: 0.01em solid #444;
  position: relative;
  background: #222;
  text-align: center;
  line-height: 1;
  font-size: 2vw;
  color: #fff;
  font-family: monospace;
  box-shadow: 0px 0.02em 0 #ccc, 0px 0.05em 0 #000;
  text-shadow: -1px -2px 2px rgba(0, 0, 0, 1);

  :after {
    position: absolute;
    top: 50%;
    left: 0;
    content: "";
    border-top: 1px solid #000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 0px;
    opacity: 0.8;
    margin-top: -1px;
  }
  @media only screen and (max-width: 600px) {
    :after {
      border-top: none;
      border-bottom: none;
  }
`;

export { BoardHeader, Column, Letter };
