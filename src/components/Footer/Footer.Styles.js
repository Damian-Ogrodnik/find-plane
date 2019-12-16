import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 0.3rem solid white;
  background: rgb(68, 68, 68);
  height: 5rem;
`;

const Paragraph = styled.div`
  font-size: 2rem;
  a {
    font-size: 2rem;
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: gold;
  }
`;

export { Footer, Paragraph };
