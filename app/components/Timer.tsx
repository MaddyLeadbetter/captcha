import { useEffect, useState } from "react";

const TIME_TO_FINISH = 1000;

const Timer = ({ sendBackToStart }: { sendBackToStart: () => void }) => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds >= TIME_TO_FINISH) {
      window.alert(
        "Time's up! A REAL human could have done this in 60 seconds. Try again ROBOT."
      );
      sendBackToStart();
    }
  }, [seconds]);

  return (
    <div
      id="timer"
      className="text-lg font-bold text-center text-white absolute z-10 top-16"
    >
      Countdown until restart: {TIME_TO_FINISH - seconds} seconds
    </div>
  );
};

export default Timer;
