import React from "react";

const useMount = (): boolean => {
  const [mount, setMount] = React.useState(false);
  React.useEffect(() => {
    setMount(true);
  }, []);
  return mount;
};

export default useMount;
