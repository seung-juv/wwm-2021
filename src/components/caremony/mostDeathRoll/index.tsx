import React from "react";
import { User, users } from "../../../commons/data";
import Most from "../most";

const mostDeathRoll: Array<User> = [users[30], users[16], users[22]];

const deathRoll: Array<User> = [users[31]];

const MostDeathRoll = (): React.ReactElement => {
  return (
    <Most
      subTitle="Where are you"
      title="생존신고 부탁드립니다."
      mostUsers={mostDeathRoll}
      users={deathRoll}
    />
  );
};

export default MostDeathRoll;
