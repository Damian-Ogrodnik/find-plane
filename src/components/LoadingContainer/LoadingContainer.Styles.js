import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: center;
  div:first-child {
    height: 1.5rem !important;
  }`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-top: 6rem;
`;

export { LoaderWrapper, Paragraph };
