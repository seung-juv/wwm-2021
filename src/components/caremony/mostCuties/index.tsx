import React from "react";
import { User, users } from "../../../commons/data";
import Most from "../most";

const mostCuties: Array<User> = [users[0], users[12], users[18]];

const cuties: Array<User> = [users[7], users[11]];

const MostCuties = (): React.ReactElement => {
  return <Most subTitle="simsimee" title="톡방의 재롱둥이" mostUsers={mostCuties} users={cuties} />;
};

export default MostCuties;
