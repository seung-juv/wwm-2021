import React from "react";
import { User, users } from "../../../commons/data";
import Most from "../most";

const mostOverworkers: Array<User> = [users[8], users[15], users[6]];

const MostOverworkers = (): React.ReactElement => {
  return <Most subTitle="overwork fairy bless you" title="야 근데" mostUsers={mostOverworkers} />;
};

export default MostOverworkers;
