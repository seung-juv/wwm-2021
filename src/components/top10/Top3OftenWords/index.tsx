import React from "react";
import styled from "@emotion/styled";
import OftenWordInfo from "./Info";
import { Top3OftenWord, top3OftenWords } from "../../../commons/data";

const Container = styled.div``;

const SubTitle = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 7rem;
  font-weight: 600;
`;

const Top3OftenWordInfoContainer = styled.div`
  width: 94.4rem;
  margin: 0 auto 4rem;
`;

const Description = styled.p`
  font-size: 2rem;
  color: #555555;
  letter-spacing: -0.008rem;
  font-weight: 400;
  text-align: center;
`;

const Top3OftenWordsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const Profile = styled.button<{ active: boolean }>`
  cursor: pointer;
  width: 12rem;
  height: 12rem;
  border-radius: 12rem;
  overflow: hidden;
  position: relative;
  transition: 0.25s transform ease;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(0.9);
  }
  &:active {
    transform: scale(0.8);
  }
`;

const ProfileCheck = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 225, 0, 0.5);
  img {
    width: 6.4rem;
    height: 4.6rem;
  }
`;

const Top3OftenWords = (): React.ReactElement => {
  const [selected, setSelected] = React.useState<Top3OftenWord>(top3OftenWords[0]);

  return (
    <Container>
      <SubTitle>
        <img src="/images/top10/top10.png" alt="TOP10!" />
      </SubTitle>
      <Title>대주주 TOP3가 자주 사용한 단어</Title>
      <Top3OftenWordInfoContainer>
        <OftenWordInfo {...selected} />
      </Top3OftenWordInfoContainer>
      <Top3OftenWordsContainer>
        {top3OftenWords.map((top3OftenWord: Top3OftenWord): React.ReactElement => {
          const { id, user } = top3OftenWord;
          const active: boolean = selected.id === id;

          function handleClick(): void {
            setSelected(top3OftenWord);
          }

          return (
            <Profile key={id} onClick={handleClick} active={active}>
              <img src={`/images/profile/${user.id}.jpg`} alt={user.name} />
              {active && (
                <ProfileCheck>
                  <img src="/images/icons/icon_check_white.png" alt="check" />
                </ProfileCheck>
              )}
            </Profile>
          );
        })}
      </Top3OftenWordsContainer>
      <Description>이모티콘과 사진/동영상 및 겹치는 단어는 제외하였습니다.</Description>
    </Container>
  );
};

export default Top3OftenWords;
