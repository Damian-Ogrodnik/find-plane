import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 0.3em solid #000;
  background: rgb(68, 68, 68);
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
`;

const Paragraph = styled.div`
  font-size: 1vw;
  a {
    font-size: 1vw;
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: gold;
  }
`;

export { Footer, Paragraph };
