import React from "react";
import styled from "@emotion/styled";
import { User } from "../../../commons/data";
import { css } from "@emotion/react";

export interface MostUser extends User {
  rank?: number;
}

export interface MostProps {
  subTitle: string;
  title: string;
  mostUsers: MostUser[];
  users?: MostUser[];
}

const Container = styled.div`
  text-align: center;
`;

const SubTitle = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
  letter-spacing: -0.08rem;
  color: #fae100;
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 7.5rem;
  font-weight: 600;
`;

const MostUsersContainer = styled.div``;

const ProfilesContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4rem;
`;

const ProfileContainer = styled.div`
  width: 30rem;
  padding: 4rem 0;
  border-radius: 1rem;
  background-color: #3c3b40;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

const Profile = styled.div`
  width: 20rem;
  height: 20rem;
  margin-bottom: 4rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20rem;
  }
`;

const Medal = styled.img`
  position: absolute;
  height: 7rem;
  top: 0;
  right: -0.5rem;
  width: auto !important;
  height: auto !important;
`;

const SmallProfileContainer = styled(ProfileContainer)`
  width: 24rem;
`;

const SmallProfile = styled(Profile)`
  width: 15rem;
  height: 15rem;
  border-radius: 15rem;
`;

const Name = styled.span`
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.08rem;
  color: #ffffff;
`;

const More = styled.button`
  font-weight: 500;
  font-size: 2.2rem;
  margin: 3rem 0;
  color: #555555;
  cursor: pointer;
`;

const UsersContainer = styled.div<{ isMore: boolean; length: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 1rem;
  max-height: 0;
  height: 100%;
  transition: 0.5s max-height ease;
  overflow: hidden;
  ${({ isMore, length }) =>
    isMore &&
    css`
      max-height: ${length * 8 - 1}rem;
    `}
`;

const Cutie = styled.div`
  width: 26rem;
  height: 7rem;
  border-radius: 1rem;
  padding: 3rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  background-color: #3c3b40;
  border: 1px solid #535353;
`;

const CutieRank = styled.span`
  font-size: 4rem;
  letter-spacing: -0.08rem;
  color: #616067;
  font-weight: 500;
`;

const CutieName = styled.span`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.08rem;
  color: #a6a3af;
`;

const Most = ({ subTitle, title, mostUsers, users }: MostProps): React.ReactElement => {
  const [isMore, setIsMore] = React.useState<boolean>(false);

  function handleToggleMore(): void {
    setIsMore((prevState) => !prevState);
  }

  return (
    <Container>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
      <MostUsersContainer>
        <ProfilesContainer>
          {mostUsers.map(({ id, name }, index) => {
            const rank: number = (() => {
              switch (index) {
                case 1:
                  return 1;
                case 0:
                  return 2;
                case 2:
                  return 3;
                default:
                  return -1;
              }
            })();
            const medal: string | null = (() => {
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
            })();

            if (index !== 1) {
              return (
                <SmallProfileContainer key={id}>
                  <SmallProfile>
                    {medal !== null && <Medal src={medal} alt={`${rank}위`} />}
                    <img src={`/images/profile/${id}.jpg`} alt={name} />
                  </SmallProfile>
                  <Name>{name.substring(0, 3)}</Name>
                </SmallProfileContainer>
              );
            }
            return (
              <ProfileContainer key={id}>
                <Profile>
                  {medal !== null && <Medal src={medal} alt={`${rank}위`} />}
                  <img src={`/images/profile/${id}.jpg`} alt={name} />
                </Profile>
                <Name style={{ color: "#fae100" }}>{name.substring(0, 3)}</Name>
              </ProfileContainer>
            );
          })}
        </ProfilesContainer>
      </MostUsersContainer>
      {users && users.length > 0 && (
        <>
          <More onClick={handleToggleMore}>더보기 {isMore ? "▲" : "▼"} </More>
          <UsersContainer isMore={isMore} length={users.length}>
            {users.map(({ id, name, rank }, index) => {
              return (
                <Cutie key={id}>
                  <CutieRank>{rank ?? index + 4}</CutieRank>
                  <CutieName>{name.substring(0, 3)}</CutieName>
                </Cutie>
              );
            })}
          </UsersContainer>
        </>
      )}
    </Container>
  );
};

export default Most;
