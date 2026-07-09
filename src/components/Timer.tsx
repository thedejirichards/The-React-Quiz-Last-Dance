import { useEffect } from "react";
import type { TimerType } from "../types/QuizAppTypes";

function Timer({ secondsRemaining, dispatch }: TimerType) {
  useEffect(() => {
    const id = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  if (!secondsRemaining) return;
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  const secondsToDisplay = seconds >= 10 ? seconds : `0${seconds}`;
  return <div className="timer">{`${mins}: ${secondsToDisplay}`}</div>;
}

export default Timer;
