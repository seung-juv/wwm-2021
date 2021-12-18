import React from "react";
import styled from "@emotion/styled";
import { Shareholder } from "../commons/data";
import format from "../utils/format";

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

const Medal = styled.img`
  position: absolute;
  height: 7rem;
  top: 1rem;
  right: 0.5rem;
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
  padding: 0.7rem 2.5rem;
  margin-bottom: 1rem;
`;

const RankDescription = styled.dd`
  font-size: 2.5rem;
  letter-spacing: -0.08rem;
  font-weight: 400;
  color: #ffffff;
  b {
    font-size: 3.3rem;
    font-weight: 500;
  }
`;

function ShareholderInfo({
  id,
  user,
  rank,
  conversationCount,
  share,
}: Shareholder): React.ReactElement {
  const medal = React.useMemo<string | null>(() => {
    switch (rank) {
      case 1:
        return "/images/gold.png";
      case 2:
        return "/images/silver.png";
      case 3:
        return "/images/bronze.png";
      default:
        return null;
    }
  }, [rank]);
  return (
    <Container>
      <Profile>
        {medal !== null && <Medal src={medal} alt={`${rank}위`} />}
        <ProfileImage src={`/images/profile/${user.id}.jpg`} alt={user.name} />
      </Profile>
      <MetaContainer>
        <Name>{user.name}</Name>
        <RankContainer>
          <RankLink>
            <RankTitle>전체순위</RankTitle>
            <RankDescription>
              <b>{rank}</b>위
            </RankDescription>
          </RankLink>
          <RankLink>
            <RankTitle>대화량</RankTitle>
            <RankDescription>
              <b>{format.comma(conversationCount)}</b>회
            </RankDescription>
          </RankLink>
          <RankLink>
            <RankTitle>톡방지분</RankTitle>
            <RankDescription>
              <b>{Number((share * 100).toFixed(2))}</b>%
            </RankDescription>
          </RankLink>
        </RankContainer>
      </MetaContainer>
    </Container>
  );
}

export default ShareholderInfo;
