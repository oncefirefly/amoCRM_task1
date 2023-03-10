import { TimerRenderProps } from "../../interfaces/timerRenderProps";
import { TimerType } from "../../types/timerType";
import { TimerStart } from "../TimerStart/TimerStart";

export function TimerRender({
  timerValue,
  setTimerValue,
}: TimerRenderProps): React.ReactElement {
  const renderTimer = (property: string) => {
    return timerValue[property as keyof TimerType] > 9
      ? `${timerValue[property as keyof TimerType]}`
      : `0${timerValue[property as keyof TimerType]}`;
  };

  return (
    <div>
      <TimerStart setTimerValue={setTimerValue} />
      <div>
        {renderTimer("hh")} : {renderTimer("mm")} : {renderTimer("ss")}
      </div>
    </div>
  );
}
