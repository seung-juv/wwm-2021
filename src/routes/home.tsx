import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import Footer from "../components/Footer";
import ScrollTrigger from "../components/ScrollTrigger";

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

const MainMore = styled.div`
  margin-top: 6rem;
  display: inline-block;
`;

const SectionTitle = styled.h3`
  font-size: 6.5rem;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: -0.06rem;
`;

const Section2 = styled.div`
  background-color: #0c0c0c;
  padding: 10rem 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
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

const Section2More = styled.div``;

const Section3 = styled.div`
  padding: 10rem 0 15rem;
`;

const Section3Banner = styled.img`
  margin-top: 4rem;
`;

function Home(): React.ReactElement {
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
              leaveFromOptions={{
                autoAlpha: 1,
                y: 0,
              }}
              leaveToOptions={{
                autoAlpha: 0,
                y: -150,
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
                delay: 0.1,
                autoAlpha: 1,
                y: 0,
              }}
              leaveFromOptions={{
                autoAlpha: 1,
                y: 0,
              }}
              leaveToOptions={{
                autoAlpha: 0,
                y: -150,
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
                delay: 0.2,
                autoAlpha: 1,
                y: 0,
              }}
              leaveFromOptions={{
                autoAlpha: 1,
                y: 0,
              }}
              leaveToOptions={{
                autoAlpha: 0,
                y: -150,
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
              delay: 0.5,
              autoAlpha: 1,
              y: 0,
            }}
            leaveFromOptions={{
              autoAlpha: 1,
              y: 0,
            }}
            leaveToOptions={{
              autoAlpha: 0,
              y: -150,
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
              delay: 0.6,
              autoAlpha: 1,
              y: 0,
            }}
            leaveFromOptions={{
              autoAlpha: 1,
              y: 0,
            }}
            leaveToOptions={{
              autoAlpha: 0,
              y: -150,
            }}
          >
            <MainUniverse>
              <img src="/images/main_universe.png" alt="WEBWEBMO UNIVERSE" />
            </MainUniverse>
          </ScrollTrigger>
          <MainTop10>
            <ScrollTrigger
              enterFromOptions={{
                autoAlpha: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 1.2,
                autoAlpha: 1,
                y: 0,
              }}
              leaveFromOptions={{
                autoAlpha: 1,
                y: 0,
              }}
              leaveToOptions={{
                autoAlpha: 0,
                y: -150,
              }}
            >
              <img src="/images/main_top10_stroke.png" alt="TOP 10 !" />
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                autoAlpha: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 1.4,
                autoAlpha: 1,
                y: 0,
              }}
              leaveFromOptions={{
                autoAlpha: 1,
                y: 0,
              }}
              leaveToOptions={{
                autoAlpha: 0,
                y: -150,
              }}
            >
              <img src="/images/main_top10_stroke.png" alt="TOP 10 !" />
            </ScrollTrigger>
            <ScrollTrigger
              enterFromOptions={{
                autoAlpha: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 1.6,
                autoAlpha: 1,
                y: 0,
              }}
              leaveFromOptions={{
                autoAlpha: 1,
                y: 0,
              }}
              leaveToOptions={{
                autoAlpha: 0,
                y: -150,
              }}
            >
              <img src="/images/main_top10_fill.png" alt="TOP 10 !" />
            </ScrollTrigger>
          </MainTop10>
          <MainTextContainer>
            <ScrollTrigger
              enterFromOptions={{
                opacity: 0,
                y: 150,
              }}
              enterToOptions={{
                delay: 2,
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
                delay: 2.2,
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
                delay: 2.4,
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
                delay: 2.6,
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
              <MainMore>
                <Link to="/">
                  <img src="/images/view_button.png" alt="보러가기" />
                </Link>
              </MainMore>
            </ScrollTrigger>
          </MainTextContainer>
        </Inner>
      </Section1>
      <Section2>
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
                    delay: i * 0.05,
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
          <Section2More>
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
                <img src="/images/view_button.png" alt="보러가기" />
              </ScrollTrigger>
            </Link>
          </Section2More>
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
