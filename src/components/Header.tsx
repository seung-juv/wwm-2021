import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.header`
  height: 10rem;
  padding: 0 8rem;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.h1`
  margin-right: 8rem;
`;

const Logo = styled.img``;

const NavigationContainer = styled.nav`
  margin-top: -0.5rem;
`;

const Navigation = styled(Link)`
  font-weight: bold;
  letter-spacing: 0.01rem;
  color: #ffffff;
  font-size: 3.2rem;
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

function Header() {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo src="/images/logo.png" alt="WMA" />
        </Link>
      </LogoContainer>
      <NavigationContainer>
        <Navigation to="/top10">TOP10</Navigation>
        <Navigation to="/top10">연말결산</Navigation>
        <Navigation to="/top10">이벤트</Navigation>
      </NavigationContainer>
    </Container>
  );
}

export default Header;
