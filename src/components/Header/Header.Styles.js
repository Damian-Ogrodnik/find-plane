import styled from "styled-components";

const Header = styled.div`
  background: rgb(68, 68, 68);
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3em solid #000;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 2.5rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
`;

export { Header, LogoWrapper, Title, Logo };
