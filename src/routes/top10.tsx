import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import SwiperCore, { A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Shareholders from "../components/top10/Shareholders";
import OftenWords from "../components/top10/OftenWords";
import Insiders from "../components/top10/Insiders";

SwiperCore.use([A11y, Mousewheel]);

const Container = styled.main`
  width: 140rem;
  margin: 0 auto;
  overflow: hidden;
  .swiper-slide {
    padding: 8rem 0;
  }
`;

function Top10(): React.ReactElement {
  return (
    <>
      <Header />
      <Container>
        <Swiper
          direction="vertical"
          slidesPerView="auto"
          mousewheel
          noSwiping
          allowTouchMove={false}
          keyboard={{ enabled: true }}
          autoHeight
        >
          <SwiperSlide>
            <Shareholders />
          </SwiperSlide>
          <SwiperSlide>
            <OftenWords />
          </SwiperSlide>
          <SwiperSlide>
            <Insiders />
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

export default Top10;
