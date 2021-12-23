import React from "react";
import { users } from "../../../commons/data";
import Most, { MostUser } from "../most";

const mostChristmas: Array<MostUser> = [users[7], users[5], users[18]];

const christmas: Array<MostUser> = [
  { ...users[13], rank: 4 },
  { ...users[6], rank: 4 },
  { ...users[12], rank: 4 },
];

const MostChristmas = (): React.ReactElement => {
  return (
    <Most
      subTitle="Merry Christmas"
      title="크리스마스 함께 보내요"
      mostUsers={mostChristmas}
      users={christmas}
    />
  );
};

export default MostChristmas;
