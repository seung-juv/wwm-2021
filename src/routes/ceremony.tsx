import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import OftenWords from "../components/top10/OftenWords";
import Issues from "../components/caremony/Issues";

import SwiperCore, { A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

SwiperCore.use([A11y, Mousewheel]);

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

function Caremony(): React.ReactElement {
  return (
    <>
      <Header />
      <Container>
        <Swiper
          direction="vertical"
          slidesPerView={1}
          mousewheel
          noSwiping
          allowTouchMove={false}
          keyboard={{ enabled: true }}
        >
          <SwiperSlide>
            <Issues />
          </SwiperSlide>
          <SwiperSlide>
            <OftenWords />
          </SwiperSlide>
          <SwiperSlide>
            <OftenWords />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default Caremony;
