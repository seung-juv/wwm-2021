import React from "react";
import styled from "@emotion/styled";

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

const IssuesContainer = styled.div`
  display: grid;
  width: 78rem;
  margin: 0 auto 2rem;
  gap: 1rem 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
`;

const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #555555;
  background-color: #222222;
  border-radius: 3.3rem;
  padding: 2.5rem 4rem;
  position: relative;
`;

const Rank = styled.span`
  font-size: 5rem;
  color: #585858;
  font-weight: 600;
  position: absolute;
  top: 0;
  left: 4rem;
  bottom: 0;
  margin: auto 0;
  line-height: 150%;
`;

const Issue = styled.p`
  text-align: center;
  font-size: 3rem;
  color: #bbbbbb;
  font-weight: 500;
  flex: 1;
`;

const issues: Array<string> = [
  "퇴사",
  "주식/코인",
  "쿠키런 킹덤",
  "다이어트/헬스",
  "MBTI",
  "백신",
  "퇴사",
  "자취",
  "붕어빵",
  "청약",
];

const Issues = (): React.ReactElement => {
  return (
    <Container>
      <SubTitle>
        <img src="/images/caremony/issues_subtitle.png" alt="TOP10!" />
      </SubTitle>
      <Title>올해의 이슈</Title>
      <IssuesContainer>
        {issues.map((issue, index): React.ReactElement => {
          return (
            <IssueContainer key={index}>
              <Rank>{index + 1}</Rank>
              <Issue>{issue}</Issue>
            </IssueContainer>
          );
        })}
      </IssuesContainer>
      <Description>순위 내 맘대로 선정했고 반박 안받습니다.</Description>
    </Container>
  );
};

export default Issues;
