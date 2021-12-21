import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Container = styled.main`
  width: 140rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  overflow: hidden;
  .swiper-wrapper {
    max-height: calc(100vh - 10rem);
    .swiper-slide {
      padding: 8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Events(): React.ReactElement {
  return (
    <>
      <Header />
      <Container></Container>
    </>
  );
}

export default Events;
