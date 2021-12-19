import React from "react";
import styled from "@emotion/styled";
import { Outsider } from "../../../commons/data";

const Container = styled.div`
  display: flex;
  background-color: #3c3b40;
  padding: 4rem 0;
  align-items: center;
  justify-content: center;
  gap: 9rem;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    position: absolute;
    right: 0;
    bottom: calc(2rem * -2);
    left: 0;
    box-sizing: border-box;
    border-top: 2rem solid #3c3b40;
    border-right: 2rem solid transparent;
    border-bottom: 2rem solid transparent;
    border-left: 2rem solid transparent;
  }
`;

const Profile = styled.div`
  width: 23.8rem;
  height: 23.8rem;
  border-radius: 23.8rem;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const MetaContainer = styled.div``;

const Name = styled.span`
  display: block;
  font-size: 4.5rem;
  color: #fae100;
  letter-spacing: -0.08rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;

const RankContainer = styled.div`
  display: flex;
  gap: 5rem;
`;

const RankLink = styled.dl`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const RankTitle = styled.dt`
  display: block;
  font-weight: 300;
  color: #ffffff;
  font-size: 2rem;
  letter-spacing: -0.08rem;
  border: 1px solid #ffffff;
  border-radius: 5rem;
  width: 12rem;
  text-align: center;
  padding: 0.7rem 0;
  margin-bottom: 1rem;
`;

const RankDescription = styled.dd`
  font-size: 2.5rem;
  letter-spacing: -0.08rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  b {
    font-size: 3.3rem;
    font-weight: 500;
  }
  span {
    font-size: 2rem;
    margin-top: 0.5rem;
    font-weight: 300;
    display: block;
    opacity: 0.3;
  }
`;

function InsderInfo({
  user,
  rank,
  firstHalfCall,
  secondHalfCall,
  totalCall,
}: Outsider): React.ReactElement {
  return (
    <Container>
      <Profile>
        <ProfileImage src={`/images/profile/${user.id}.jpg`} alt={user.name} />
      </Profile>
      <MetaContainer>
        <Name>{user.name}</Name>
        <RankContainer>
          <RankLink>
            <RankTitle>상반기순위</RankTitle>
            <RankDescription>
              <b>{firstHalfCall.rank}</b>위<span>{firstHalfCall.count}회</span>
            </RankDescription>
          </RankLink>
          <RankLink>
            <RankTitle>하반기순위</RankTitle>
            <RankDescription>
              <b>{secondHalfCall.rank}</b>위<span>{secondHalfCall.count}회</span>
            </RankDescription>
          </RankLink>
          <RankLink>
            <RankTitle>총 순위</RankTitle>
            <RankDescription>
              <b>{totalCall.rank}</b>위<span>{totalCall.count}회</span>
            </RankDescription>
          </RankLink>
        </RankContainer>
      </MetaContainer>
    </Container>
  );
}

export default InsderInfo;
