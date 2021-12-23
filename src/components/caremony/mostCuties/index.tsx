import React from "react";
import { users } from "../../../commons/data";
import Most, { MostUser } from "../most";

const mostCuties: Array<MostUser> = [users[0], users[12], users[18]];

const cuties: Array<MostUser> = [
  { ...users[7], rank: 4 },
  { ...users[11], rank: 4 },
];

const MostCuties = (): React.ReactElement => {
  return <Most subTitle="Gagman" title="톡방의 재롱둥이" mostUsers={mostCuties} users={cuties} />;
};

export default MostCuties;
