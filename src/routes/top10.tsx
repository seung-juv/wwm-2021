import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import ShareholderInfo from "../components/ShareholderInfo";
import { Shareholder, shareholders } from "../commons/data";

const Container = styled.main`
  width: 140rem;
  padding: 8rem 0;
  margin: 0 auto;
`;

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

const ProfileInfoContainer = styled.div`
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

const ProfileContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  margin-bottom: 2rem;
`;

const Profile = styled.button`
  cursor: pointer;
  width: 12rem;
  height: 12rem;
  border-radius: 12rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

function Top10(): React.ReactElement {
  const [selectedProfile, setSelectedProfile] = React.useState<Shareholder>(shareholders[0]);

  return (
    <>
      <Header />
      <Container>
        <SubTitle>
          <img src="/images/top10/top10.png" alt="TOP10!" />
        </SubTitle>
        <Title>웹웹모 대주주 명단</Title>
        <ProfileInfoContainer>
          <ShareholderInfo {...selectedProfile} />
        </ProfileInfoContainer>
        <ProfileContainer>
          {shareholders.map((shareholder: Shareholder): React.ReactElement => {
            const { id, user } = shareholder;

            function handleClick(): void {
              setSelectedProfile(shareholder);
            }

            return (
              <Profile key={id} onClick={handleClick}>
                <img src={`/images/profile/${user.id}.jpg`} alt={user.name} />
              </Profile>
            );
          })}
        </ProfileContainer>
        <Description>
          2021년 한 해 말을 가장 많이 한 사람들 (기준 2021.1.22.~12.16.) 오차 있어봐야 얼마 차이
          안남
        </Description>
      </Container>
    </>
  );
}

export default Top10;
