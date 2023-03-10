import { TimerType } from "../../types/timerType";
import { TimerSetterProps } from "../../interfaces//timerSetterProps";

export default function TimerSetter({
  value,
  propertyToChange,
  setTimerValue,
}: TimerSetterProps): React.ReactElement {
  const handleTimerChange = (
    e: React.FormEvent<HTMLInputElement>,
    property: string
  ): void => {
    const newValue: number = +e.currentTarget.value;

    setTimerValue((currentTimerValue: TimerType) => {
      return {
        ...currentTimerValue,
        [property as keyof TimerType]: newValue,
      };
    });
  };

  return (
    <label htmlFor={propertyToChange}>
      {`Enter ${propertyToChange}`}
      <input
        name={propertyToChange}
        type="number"
        value={value}
        onChange={(e) => handleTimerChange(e, propertyToChange)}
      />
    </label>
  );
}
