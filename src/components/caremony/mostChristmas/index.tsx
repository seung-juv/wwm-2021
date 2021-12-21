import React from "react";
import { User, users } from "../../../commons/data";
import Most from "../most";

const mostChristmas: Array<User> = [users[7], users[5], users[18]];

const christmas: Array<User> = [users[13], users[6], users[12]];

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
