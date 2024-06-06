import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result="Lost" targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {!timeStarted ? "Start" : " Stop"} Challenge
          </button>
        </p>

        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
