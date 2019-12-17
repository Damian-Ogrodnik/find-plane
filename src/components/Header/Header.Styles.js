import styled from "styled-components";

const Header = styled.div`
  background: rgb(68, 68, 68);
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3rem solid white;
  padding: 1rem;
  box-shadow: 0 8px 6px -6px black;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 7rem;
  @media only screen and (max-width: 600px) {
      height: 5rem;
    }
  }
`;

export { Header, LogoWrapper, Title, Logo };
