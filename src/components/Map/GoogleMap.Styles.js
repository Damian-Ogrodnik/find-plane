import styled from "styled-components";

const infoWrapper = styled.div`
  color: black;
  text-align: center;
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

const Position = styled.div`
  display: flex;
  justify-content: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  padding: 0.5rem 0rem 0rem 0.5rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export { infoWrapper, Header, Position, Paragraph };
