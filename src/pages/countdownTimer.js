import React from "react";
import { useCountdown } from "./countdown";
import { useNavigate } from "react-router-dom";

const CountdownTimer = ({targetTime}) => {
  const [minutes, seconds] = useCountdown(targetTime);

  if (minutes + seconds <= 0) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    navigate("-1");
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  }
};

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default CountdownTimer;
