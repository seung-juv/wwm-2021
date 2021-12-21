import React from "react";
import { User, users } from "../../../commons/data";
import Most from "../most";

const mostNonsensers: Array<User> = [users[1], users[7], users[12]];

const nonsensers: Array<User> = [users[27], users[5]];

const MostNonsensers = (): React.ReactElement => {
  return (
    <Most
      subTitle="simsimee"
      title="헛소리 가장 많이 한 사람"
      mostUsers={mostNonsensers}
      users={nonsensers}
    />
  );
};

export default MostNonsensers;
