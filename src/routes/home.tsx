import React from "react";
import gsap from "gsap";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import Footer from "../components/Footer";
import ScrollTrigger from "../components/ScrollTrigger";
import useMount from "../hooks/useMount";

const Container = styled.div`
  padding-bottom: 5rem;
`;

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
  position: relative;
  img {
    display: block;
    position: relative;
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
    &:last-child {
      position: absolute;
      bottom: 0;
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

const MainText1 = styled.p`
  color: #ffffff;
  font-size: 6rem;
  letter-spacing: -0.08rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const MainText3 = styled.p`
  font-size: 2.4rem;
  color: #8d8d8d;
  letter-spacing: -0.08rem;
  font-weight: 400;
`;

const MoreButton = styled.button`
  margin-top: 6rem;
  background-color: #cccccc;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    position: relative;
    z-index: 3;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-color: #00f55f;
    z-index: 0;
    transition: 0.5s left ease;
  }
  &:hover {
    &::after {
      left: 0;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 6.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.06rem;
`;

const Section2 = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
`;

const Section2BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  z-index: 0;
`;

const Section2Background = styled.hr`
  background-color: #4b00ae;
  width: 0;
  height: 12.2rem;
  border: 0;
  line-height: 0;
  margin: 0;
`;

const Section2Text2 = styled.div`
  margin-top: 10rem;
  margin-bottom: 6rem;
  font-size: 2.4rem;
  line-height: 3.5rem;
  color: #b8b8b8;
  letter-spacing: -0.08rem;
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
  &:nth-of-type(n + 16) {
    transform: translateX(-50%);
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const Section2MoreButton = styled(MoreButton)`
  margin-top: 0;
`;

const Section3 = styled.div`
  padding: 10rem 0 15rem;
`;

const Section3Banner = styled.img`
  margin-top: 4rem;
`;

function Home(): React.ReactElement {
  const mount = useMount();
  const top10Ref = React.useRef<{
    stroke: Array<HTMLImageElement | null>;
    fill: HTMLImageElement | null;
  }>({
    stroke: [],
    fill: null,
  });
  const timeline = React.useMemo(() => gsap.timeline(), []);

  React.useEffect(() => {
    if (mount) {
      timeline
        .to(top10Ref.current.fill, { opacity: 0, duration: 0.001 })
        .to(top10Ref.current.stroke, { opacity: 0, duration: 0 })
        .to(top10Ref.current.stroke[0], { opacity: 1, delay: 1, duration: 0.001 })
        .to(top10Ref.current.stroke[1], { opacity: 1, delay: 0.1, duration: 0.001 })
        .to(top10Ref.current.stroke[0], { opacity: 0, delay: 0.05, duration: 0.001 })
        .to(top10Ref.current.stroke[2], { opacity: 1, delay: 0.1, duration: 0.001 })
        .to(top10Ref.current.stroke[1], { opacity: 0, delay: 0.05, duration: 0.001 })
        .to(top10Ref.current.fill, { opacity: 1, delay: 0.15, duration: 0.001 })
        .to(top10Ref.current.fill, { opacity: 0, delay: 0.15, duration: 0.001 })
        .to(top10Ref.current.fill, { opacity: 1, delay: 0.15, duration: 0.001 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mount]);

  return (
    <Container>
      <Section1>
        <Inner>
          <MainWMA>
            <ScrollTrigger
              enterFromOptions={{
                autoAlpha: 0,
                y: 150,
              }}
              enterToOptions={{
                autoAlpha: 1,
                y: 0,
              }}
            >
              <img src="/images/main_wma.png" alt="wma" />
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                autoAlpha: 0,
                y: 150,
              }}
              enterToOptions={{
                autoAlpha: 1,
                y: 0,
              }}
            >
              <img src="/images/main_2021.png" alt="2021" />
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                autoAlpha: 0,
                y: 150,
              }}
              enterToOptions={{
                autoAlpha: 1,
                y: 0,
              }}
            >
              <img src="/images/main_web_web_mo_awards.png" alt="WEB WEB MO AWARDS" />
            </ScrollTrigger>
          </MainWMA>
          <ScrollTrigger
            enterFromOptions={{
              autoAlpha: 0,
              y: 150,
            }}
            enterToOptions={{
              delay: 0.1,
              autoAlpha: 1,
              y: 0,
            }}
          >
            <MainDate>
              <img src="/images/main_date.png" alt="2021.12.24 12:24" />
            </MainDate>
          </ScrollTrigger>
          <ScrollTrigger
            enterFromOptions={{
              autoAlpha: 0,
              y: 150,
            }}
            enterToOptions={{
              delay: 0.2,
              autoAlpha: 1,
              y: 0,
            }}
          >
            <MainUniverse>
              <img src="/images/main_universe.png" alt="WEBWEBMO UNIVERSE" />
            </MainUniverse>
          </ScrollTrigger>
          <MainTop10>
            <img
              ref={(ref) => {
                top10Ref.current.stroke.push(ref);
              }}
              src="/images/main_top10_stroke.png"
              alt="TOP 10 !"
            />
            <img
              ref={(ref) => {
                top10Ref.current.stroke.push(ref);
              }}
              src="/images/main_top10_stroke.png"
              alt="TOP 10 !"
            />
            <img
              ref={(ref) => {
                top10Ref.current.stroke.push(ref);
              }}
              src="/images/main_top10_stroke.png"
              alt="TOP 10 !"
            />
            <img
              ref={(ref) => {
                top10Ref.current.fill = ref;
              }}
              src="/images/main_top10_fill.png"
              alt="TOP 10 !"
            />
          </MainTop10>
          <MainTextContainer>
            <ScrollTrigger
              enterFromOptions={{
                opacity: 0,
                y: 150,
              }}
              enterToOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveFromOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveToOptions={{
                opacity: 0,
                y: -150,
              }}
            >
              <MainText1>수고했어 2021 함께하자 2022</MainText1>
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                opacity: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 0.1,
                opacity: 1,
                y: 0,
              }}
              leaveFromOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveToOptions={{
                opacity: 0,
                y: -150,
              }}
            >
              <img src="/images/text_2.png" alt="Our own awards ceremony, WMA2021" />
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                opacity: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 0.2,
                opacity: 1,
                y: 0,
              }}
              leaveFromOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveToOptions={{
                opacity: 0,
                y: -150,
              }}
            >
              <MainText3>
                여러분의 월급 루팡으로 WMA2021이 마무리 됐습니다. 올해 영광의 월급루팡러를 확인하고
                축하해주세요.
              </MainText3>
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                opacity: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 0.3,
                opacity: 1,
                y: 0,
              }}
              leaveFromOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveToOptions={{
                opacity: 0,
                y: -150,
              }}
            >
              <Link to="/">
                <MoreButton>
                  <img src="/images/button_text.png" alt="보러가기" />
                </MoreButton>
              </Link>
            </ScrollTrigger>
          </MainTextContainer>
        </Inner>
      </Section1>
      <Section2>
        <Section2BackgroundContainer>
          <ScrollTrigger
            enterFromOptions={{
              width: 0,
            }}
            enterToOptions={{
              width: 1216,
            }}
            leaveFromOptions={{
              width: 1216,
            }}
            leaveToOptions={{
              width: 0,
            }}
          >
            <Section2Background />
          </ScrollTrigger>
          <ScrollTrigger
            enterFromOptions={{
              width: 0,
            }}
            enterToOptions={{
              width: 690,
            }}
            leaveFromOptions={{
              width: 690,
            }}
            leaveToOptions={{
              width: 0,
            }}
          >
            <Section2Background />
          </ScrollTrigger>
          <ScrollTrigger
            enterFromOptions={{
              width: 0,
            }}
            enterToOptions={{
              width: 690,
            }}
            leaveFromOptions={{
              width: 690,
            }}
            leaveToOptions={{
              width: 0,
            }}
          >
            <Section2Background />
          </ScrollTrigger>
          <ScrollTrigger
            enterFromOptions={{
              width: 0,
            }}
            enterToOptions={{
              width: 690,
            }}
            leaveFromOptions={{
              width: 690,
            }}
            leaveToOptions={{
              width: 0,
            }}
          >
            <Section2Background />
          </ScrollTrigger>
        </Section2BackgroundContainer>
        <Inner>
          <ScrollTrigger
            enterFromOptions={{
              opacity: 0,
              y: 150,
            }}
            enterToOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveFromOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveToOptions={{
              opacity: 0,
              y: -150,
            }}
          >
            <SectionTitle>연말결산</SectionTitle>
          </ScrollTrigger>
          <ScrollTrigger
            enterFromOptions={{
              opacity: 0,
              y: 150,
            }}
            enterToOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveFromOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveToOptions={{
              opacity: 0,
              y: -150,
            }}
          >
            <Section2Text2>
              올해의 톡방 이슈와 루팡러들의 루팡률 총 정리,
              <br />
              지금 확인해보세요!
            </Section2Text2>
          </ScrollTrigger>
          <Section2SliderWrapper>
            <Section2Slider>
              {[...Array(30)].map((_, i) => (
                <ScrollTrigger
                  enterFromOptions={{
                    opacity: 0,
                    y: 150,
                  }}
                  enterToOptions={{
                    delay: (i % 15) * 0.05,
                    opacity: 1,
                    y: 0,
                  }}
                  leaveFromOptions={{
                    opacity: 1,
                    y: 0,
                  }}
                  leaveToOptions={{
                    opacity: 0,
                    y: -150,
                  }}
                >
                  <Section2Slide key={i}>
                    <img src={`/images/profile/${i + 1}.jpg`} alt={`${i + 1}`} />
                  </Section2Slide>
                </ScrollTrigger>
              ))}
            </Section2Slider>
          </Section2SliderWrapper>

          <ScrollTrigger
            enterFromOptions={{
              opacity: 0,
              y: 150,
            }}
            enterToOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveFromOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveToOptions={{
              opacity: 0,
              y: -150,
            }}
          >
            <Section2MoreButton>
              <Link to="/">
                <img src="/images/button_text.png" alt="보러가기" />
              </Link>
            </Section2MoreButton>
          </ScrollTrigger>
        </Inner>
      </Section2>
      <Section3>
        <Inner>
          <ScrollTrigger
            enterFromOptions={{
              opacity: 0,
              y: 150,
            }}
            enterToOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveFromOptions={{
              opacity: 1,
              y: 0,
            }}
            leaveToOptions={{
              opacity: 0,
              y: -150,
            }}
          >
            <SectionTitle>이벤트</SectionTitle>
          </ScrollTrigger>
          <Link to="/">
            <ScrollTrigger
              enterFromOptions={{
                opacity: 0,
                y: 150,
              }}
              enterToOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveFromOptions={{
                opacity: 1,
                y: 0,
              }}
              leaveToOptions={{
                opacity: 0,
                y: -150,
              }}
            >
              <Section3Banner
                src="/images/section_3_banner.png"
                alt="당신에게 보내는 랜덤 새해 덕담"
              />
            </ScrollTrigger>
          </Link>
        </Inner>
      </Section3>
      <Inner>
        <Footer />
      </Inner>
    </Container>
  );
}

export default Home;
