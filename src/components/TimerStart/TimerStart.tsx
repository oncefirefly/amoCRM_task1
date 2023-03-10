import { TimerType } from "../../types/timerType";

export function TimerStart({
  setTimerValue,
}: {
  setTimerValue: Function;
}): React.ReactElement {
  const startTimer: React.MouseEventHandler<HTMLButtonElement> = () => {
    let interval: NodeJS.Timer;

    interval = setInterval(() => {
      setTimerValue((currentTimerValue: TimerType) => {
        if (
          currentTimerValue.hh >= 0 &&
          currentTimerValue.mm >= 0 &&
          currentTimerValue.ss > 0
        ) {
          return {
            ...currentTimerValue,
            ss: currentTimerValue.ss - 1,
          };
        }

        if (
          currentTimerValue.hh >= 0 &&
          currentTimerValue.mm > 0 &&
          currentTimerValue.ss === 0
        ) {
          return {
            ...currentTimerValue,
            mm: currentTimerValue.mm - 1,
            ss: 59,
          };
        }

        if (
          currentTimerValue.hh > 0 &&
          currentTimerValue.mm === 0 &&
          currentTimerValue.ss === 0
        ) {
          return {
            ...currentTimerValue,
            hh: currentTimerValue.hh - 1,
            mm: 59,
            ss: 59,
          };
        }

        clearInterval(interval);
        return { ...currentTimerValue };
      });
    }, 1000);
  };

  return (
    <button type="button" onClick={startTimer}>
      Start Timer
    </button>
  );
}
