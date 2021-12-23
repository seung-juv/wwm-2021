import React from "react";
import moment from "moment";
import { openDate } from "../index";
import styled from "@emotion/styled";
import useMount from "../hooks/useMount";

export interface TimerProps {
  date: Date;
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

const Time = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  line-height: 9rem;
  color: #fae100;
  letter-spacing: -0.08rem;
  line-height: 5rem;
`;

function Timer({ date }: TimerProps): React.ReactElement | null {
  const mount = useMount();
  const [time, setTime] = React.useState<moment.Moment>(moment(date));
  const intervalRef = React.useRef<NodeJS.Timer | null>(null);

  const timer = React.useMemo(() => {
    if (
      Number(openDate.format("YYYYMMDDHHmmss")) <=
      Number(time.clone().add(1, "second").format("YYYYMMDDHHmmss"))
    ) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.location.reload();
    }
    return moment.utc(moment(openDate).diff(moment(time))).format("HH시간 mm분 ss초 남았습니다.");
  }, [time]);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevState) => moment(prevState).add(1, "second"));
    }, 1000);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <Container>
      <Time>연말정산까지</Time>
      <Time>{timer}</Time>
    </Container>
  );
}

export default Timer;
