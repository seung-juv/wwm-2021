import styled from "@emotion/styled";
import React from "react";

const Container = styled.footer`
  padding: 5rem 0;
  border-top: 1px solid #292929;
  p {
    font-size: 1.3rem;
    font-weight: 300;
    color: #a3a3a3;
    letter-spacing: -0.08rem;
  }
`;

function Footer(): React.ReactElement {
  return (
    <Container>
      <p>ⓒ WEBWEBMO Kingdom Corp.</p>
    </Container>
  );
}

export default Footer;
