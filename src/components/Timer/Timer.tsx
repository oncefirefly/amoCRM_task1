import { useState, useEffect } from "react";
import { TimerType } from "../../types/timerType";
import { TimerRender } from "../TimerRender/TimerRender";
import TimerSetter from "../TimerSetter/TimerSetter";
import timerStyles from "./Timer.module.css";

export default function Timer(): React.ReactElement {
  const [timerValue, setTimerValue] = useState<TimerType>({
    hh: 0,
    mm: 0,
    ss: 0,
  });

  useEffect(() => {
    if (timerValue.mm >= 60) {
      setTimerValue({
        ...timerValue,
        hh: timerValue.hh + Math.floor(timerValue.mm / 60),
        mm: timerValue.mm % 60,
      });
    }

    if (timerValue.ss >= 60) {
      setTimerValue({
        ...timerValue,
        mm: timerValue.mm + Math.floor(timerValue.ss / 60),
        ss: timerValue.ss % 60,
      });
    }

    console.log(timerValue);
  }, [timerValue]);

  return (
    <main className={timerStyles.main}>
      <form className={timerStyles.form}>
        <TimerSetter
          value={timerValue.hh}
          propertyToChange={"hh"}
          setTimerValue={setTimerValue}
        />
        <TimerSetter
          value={timerValue.mm}
          propertyToChange={"mm"}
          setTimerValue={setTimerValue}
        />
        <TimerSetter
          value={timerValue.ss}
          propertyToChange={"ss"}
          setTimerValue={setTimerValue}
        />
      </form>
      <TimerRender timerValue={timerValue} setTimerValue={setTimerValue} />
    </main>
  );
}
