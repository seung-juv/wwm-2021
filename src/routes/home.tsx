import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";

const Container = styled.div``;

const Inner = styled.div`
  padding: 0 8.5rem;
  width: 100%;
  margin: 0 auto;
`;

const Section1 = styled.div`
  width: 100%;
  padding-top: 8.5rem;
  padding-bottom: 10rem;
`;

const MainWMA = styled.div`
  display: flex;
  margin-bottom: 3rem;
  img {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const MainDate = styled.div`
  margin-bottom: 1rem;
`;

const MainUniverse = styled.div`
  margin-bottom: 6rem;
`;

const MainTop10 = styled.div`
  margin-bottom: 18rem;
  img {
    display: block;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

const MainTextContainer = styled.div`
  img {
    display: block;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;

const MainMore = styled.div`
  margin-top: 6rem;
`;

const Section2 = styled.div`
  background-color: #0c0c0c;
  padding: 10rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Section2Text1 = styled.div`
  margin-bottom: 10rem;
  img {
    display: block;
  }
`;

const Section2Text2 = styled.div`
  margin-bottom: 6rem;
  img {
    display: block;
  }
`;

const section2SliderKeyframes = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Section2SliderWrapper = styled.div`
  width: calc(100% + 8.5rem);
  overflow: hidden;
`;

const Section2Slider = styled.div`
  margin-bottom: 0.5rem;
  display: grid;
  line-height: 0;
  grid-template-columns: repeat(15, 1fr);
  gap: 6px;
  animation-duration: 25s;
  animation-name: ${section2SliderKeyframes};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Section2Slide = styled.div`
  width: 18.7rem;
  height: 18.7rem;
  &:nth-child(n + 16) {
    transform: translateX(-50%);
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const Section2More = styled.div``;

function Home(): React.ReactElement {
  return (
    <Container>
      <Section1>
        <Inner>
          <MainWMA>
            <img src="/images/main_wma.png" alt="wma" />
            <img src="/images/main_2021.png" alt="2021" />
            <img src="/images/main_web_web_mo_awards.png" alt="WEB WEB MO AWARDS" />
          </MainWMA>
          <MainDate>
            <img src="/images/main_date.png" alt="2021.12.24 12:24" />
          </MainDate>
          <MainUniverse>
            <img src="/images/main_universe.png" alt="WEBWEBMO UNIVERSE" />
          </MainUniverse>
          <MainTop10>
            <img src="/images/main_top10_stroke.png" alt="TOP 10 !" />
            <img src="/images/main_top10_stroke.png" alt="TOP 10 !" />
            <img src="/images/main_top10_fill.png" alt="TOP 10 !" />
          </MainTop10>
          <MainTextContainer>
            <img src="/images/text_1.png" alt="수고했어 2021 함께하자 2022" />
            <img src="/images/text_2.png" alt="Our own awards ceremony, WMA2021" />
            <img
              src="/images/text_3.png"
              alt="여러분의 월급 루팡으로 WMA 2021이 마무리 됐습니다. 올해 영과으이 월급루팡러를 확인하고 축하해주세요"
            />
            <MainMore>
              <Link to="/">
                <img src="/images/view_button.png" alt="보러가기" />
              </Link>
            </MainMore>
          </MainTextContainer>
        </Inner>
      </Section1>
      <Section2>
        <Inner>
          <Section2Text1>
            <img src="/images/text_4.png" alt="연말결산" />
          </Section2Text1>
          <Section2Text2>
            <img
              src="/images/text_5.png"
              alt="올해의 톡방 이슈와 루팡러들의 루팡률 총 정리, 지금 확인해보세요!"
            />
          </Section2Text2>
          <Section2SliderWrapper>
            <Section2Slider>
              {[...Array(30)].map((_, i) => (
                <Section2Slide key={i}>
                  <img src={`/images/profile/${i + 1}.jpg`} alt={`${i + 1}`} />
                </Section2Slide>
              ))}
            </Section2Slider>
          </Section2SliderWrapper>
          <Section2More>
            <Link to="/">
              <img src="/images/view_button.png" alt="보러가기" />
            </Link>
          </Section2More>
        </Inner>
      </Section2>
    </Container>
  );
}

export default Home;
