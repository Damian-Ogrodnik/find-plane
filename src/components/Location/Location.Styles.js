import styled from "styled-components";

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PositionWrapper = styled.div``;

const LocationParagraph = styled.p`
  font-size: 1.75rem;
  text-align: right;
`;

const LocationIcon = styled.img`
  height: 7rem;
  filter: contrast(160%);
  :hover {
    filter: brightness(100);
  }
  :active {
    transform: translateY(4px);
  }
  @media only screen and (max-width: 600px) {
    height: 5rem;
  }
}
`;

export { LocationWrapper, PositionWrapper, LocationParagraph, LocationIcon };
