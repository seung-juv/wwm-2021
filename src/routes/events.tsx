import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Container = styled.main`
  width: 140rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  margin-bottom: 6rem;
`;

const Text = styled.p`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  line-height: 9rem;
  color: #ffffff;
  letter-spacing: -0.08rem;
  b {
    color: #fae100;
  }
`;

const NameContainer = styled.span`
  margin: -1.7rem 2rem;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 30rem;
  height: 8.7rem;
  line-height: 8.7rem;
`;

const Name = styled.b`
  position: absolute;
  word-break: keep-all;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 24rem;
  height: 8rem;
  background-color: #5d12a4;
  color: #adadad;
  font-size: 2.8rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.25s color ease;
  &:hover {
    color: #ffffff;
  }
`;

const CommentsContainer = styled.span`
  margin: -1.7rem 2rem;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
  height: 8.7rem;
  line-height: 8.7rem;
`;

const Comments = styled.b`
  position: absolute;
  word-break: keep-all;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 2.2rem;
  color: #555555;
  letter-spacing: -0.08rem;
  font-weight: 400;
  position: absolute;
  bottom: 15rem;
`;

const names: Array<string> = [
  "꽃사나",
  "주희",
  "현수",
  "승주",
  "수현",
  "조찬형",
  "배현기",
  "공주은",
  "(윗)규리",
  "(아랫)규리",
  "정대",
  "아로 :)",
  "한동현",
  "KHE",
  "반근영",
  "cy",
  "우현",
  "기태",
  "이음",
  "꾸댕이",
  "주성",
  "창교",
  "채림",
  "철민",
  "박규",
  "hyeon",
  "신문영",
  "MJ Yoon",
  "ちょろ",
  "보영",
  "병욱",
].sort(() => Math.random() - 0.5);

const comments: Array<string> = [
  "적게 일하고 많이 버세요",
  "기태님의 기를 이어받으세요",
  "다이어트 성공하세요",
  "더 행복하세요",
  "건강하세요",
  "잘 지내던지 말던지",
  "저랑 놀아주세요",
  "제 사랑을 받아주세요",
  "변비탈출하세요",
  "주식투자 성공하세요",
  "저를 먹여살려주세요",
  "부자되세요",
  "내집마련 하세요",
  "들숨에 건강을 날숨에 재력을",
  "어쩔티비",
  "웃음 가득한 한 해 되세요",
  "행운과 평안이 가득하시길",
  "좋은일만 생길거예요",
  "소망하는 일 모두 이루세요",
  "맛있는거 사주세요",
].sort(() => Math.random() - 0.5);

function Events(): React.ReactElement {
  const [status, setStatus] = React.useState(true);
  const _names: Array<string> = [...names, names[0]];
  const _comments: Array<string> = [...comments, comments[0]];
  const [nameIndex, setNameIndex] = React.useState<number>(0);
  const [commentIndex, setCommentIndex] = React.useState<number>(0);
  const nameIntervalRef = React.useRef<NodeJS.Timer | null>(null);
  const commentsIntervalRef = React.useRef<NodeJS.Timer | null>(null);
  const ms = 100;

  function handleStartNameInterval(): void {
    nameIntervalRef.current = setInterval(() => {
      setNameIndex((prevState) => (prevState >= _names.length - 1 ? 0 : prevState + 1));
    }, ms);
  }

  function handleStopNameInterval(): void {
    if (nameIntervalRef.current) {
      clearInterval(nameIntervalRef.current);
      nameIntervalRef.current = null;
    }
  }

  function handleStartCommentsInterval(): void {
    commentsIntervalRef.current = setInterval(() => {
      setCommentIndex((prevState) => (prevState >= _comments.length - 1 ? 0 : prevState + 1));
    }, ms);
  }

  function handleCommentsInterval(): void {
    if (commentsIntervalRef.current) {
      clearInterval(commentsIntervalRef.current);
      commentsIntervalRef.current = null;
    }
  }

  function handleStart(): void {
    handleStartNameInterval();
    handleStartCommentsInterval();
    setStatus(true);
  }

  function handleStop(): void {
    if (nameIntervalRef.current) {
      handleStopNameInterval();
      return;
    }
    if (commentsIntervalRef.current) {
      handleCommentsInterval();
      setStatus(false);
      return;
    }
  }

  React.useEffect(() => {
    handleStart();
    return () => {
      handleStopNameInterval();
      handleCommentsInterval();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (nameIndex === _names.length - 1) {
      setTimeout(() => {
        setNameIndex(0);
      }, ms / 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameIndex]);

  React.useEffect(() => {
    if (commentIndex === _comments.length - 1) {
      setTimeout(() => {
        setCommentIndex(0);
      }, ms / 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentIndex]);

  return (
    <>
      <Header />
      <Container>
        <TextContainer>
          <Text>
            올 한해{" "}
            <NameContainer>
              {_names.map((name, index) => {
                if (status === false && index !== nameIndex) {
                  return null;
                }
                return (
                  <Name
                    key={index}
                    style={{
                      top: (nameIndex - index) * 100,
                      transition: nameIndex === 0 ? "none" : "0.1s top ease",
                    }}
                  >
                    {name}
                  </Name>
                );
              })}
            </NameContainer>
            님과 함께여서 행복했습니다.
            <br />
            2022년에는
            <br />
            <CommentsContainer>
              {_comments.map((comment, index) => {
                if (status === false && index !== commentIndex) {
                  return null;
                }
                return (
                  <Comments
                    key={index}
                    style={{
                      top: (commentIndex - index) * 100,
                      transition: commentIndex === 0 ? "none" : "0.1s top ease",
                    }}
                  >
                    {comment}
                  </Comments>
                );
              })}
            </CommentsContainer>
          </Text>
        </TextContainer>
        <Button onClick={status ? handleStop : handleStart}>{status ? "STOP" : "RESTART"}</Button>
        <Description>
          STOP을 눌러 덕담을 완성하고 캡쳐 또는 타이핑하여 톡방에 공유해주세요.(대상 태그필수)
        </Description>
      </Container>
    </>
  );
}

export default Events;
