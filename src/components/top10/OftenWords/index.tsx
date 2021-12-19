import React from "react";
import styled from "@emotion/styled";
import { Word, oftenWords } from "../../../commons/data";
import format from "../../../utils/format";

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

const Description = styled.p`
  font-size: 2rem;
  color: #555555;
  letter-spacing: -0.008rem;
  font-weight: 400;
  text-align: center;
`;

const OftenWordsContainer = styled.div`
  display: grid;
  width: 78rem;
  margin: 0 auto 2rem;
  gap: 2.4rem;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
`;

const OftenWordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #555555;
  background-color: #222222;
  border-radius: 3.3rem;
  padding: 2.5rem 4rem;
`;

const Rank = styled.span`
  font-size: 5rem;
  color: #585858;
  font-weight: 600;
`;

const OftenWord = styled.p`
  text-align: center;
  font-size: 3rem;
  color: #bbbbbb;
  font-weight: 500;
  flex: 1;
`;

const Count = styled.span`
  font-size: 2rem;
  color: #bbbbbb;
  font-weight: 500;
`;

const OftenWords = (): React.ReactElement => {
  return (
    <Container>
      <SubTitle>
        <img src="/images/top10/top10.png" alt="TOP10!" />
      </SubTitle>
      <Title>웹둥이들이 많이 사용한 단어</Title>
      <OftenWordsContainer>
        {oftenWords.map(({ id, rank, word, count }: Word): React.ReactElement => {
          return (
            <OftenWordContainer key={id}>
              <Rank>{rank}</Rank>
              <OftenWord>{word}</OftenWord>
              <Count>{format.comma(count ?? 0)}회</Count>
            </OftenWordContainer>
          );
        })}
      </OftenWordsContainer>
      <Description>이모티콘과 사진/동영상 및 겹치는 단어는 제외하였습니다.</Description>
    </Container>
  );
};

export default OftenWords;
