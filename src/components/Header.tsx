import React from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

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

const Navigation = styled(Link)<{ active: number }>`
  font-weight: bold;
  letter-spacing: 0.01rem;
  color: #ffffff;
  font-size: 3.2rem;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: 0.25s opacity ease;
  &:not(:last-child) {
    margin-right: 3rem;
  }
  &:hover {
    opacity: 1;
  }
`;

const navigation = [
  {
    key: 0,
    to: "/top10",
    label: "TOP10",
  },
  {
    key: 1,
    to: "/ceremony",
    label: "연말결산",
  },
  {
    key: 2,
    to: "/events",
    label: "이벤트",
  },
];

function Header() {
  const location = useLocation();

  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo src="/images/logo.png" alt="WMA" />
        </Link>
      </LogoContainer>
      <NavigationContainer>
        {navigation.map(({ key, to, label }) => {
          const active: boolean = location.pathname.startsWith(to);
          return (
            <Navigation key={key} to={to} active={active ? 1 : 0}>
              {label}
            </Navigation>
          );
        })}
      </NavigationContainer>
    </Container>
  );
}

export default Header;
