import React from "react";
import { User, users } from "../../../commons/data";
import Most from "../most";

const mostHelpers: Array<User> = [users[0], users[12], users[6]];

const helpers: Array<User> = [users[27], users[9], users[5]];

const MostHelpers = (): React.ReactElement => {
  return (
    <Most
      subTitle="Google Human"
      title="도움을 가장 많이 준 사람"
      mostUsers={mostHelpers}
      users={helpers}
    />
  );
};

export default MostHelpers;
