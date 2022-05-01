import { useEffect, useMemo, useState } from "react";
import Countdown from "./countdown";
import { Item, TimeSlot, TimeSlotLabel } from "./style";

const FINAL_DATE = "13 May 2050 20:00:00 GMT-0300";
const finalDateInstance = new Date(FINAL_DATE);

const ONE_SECOND = 1000; // in ms

const COUNTDOWN_LABELS = [
  "Anos",
  "Meses",
  "Dias",
  "Horas",
  "Minutos",
  "Segundos",
];

export default function Timer() {
  const [timer, setTimer] = useState(finalDateInstance.getTime());

  const countdown = useMemo(() => {
    const timerConverted2Date = new Date(timer);
    const countdownInstance = new Countdown(timerConverted2Date);
    return countdownInstance.total.map((value, index) => {
      const valueConverted2Array = value.toString().split("");
      return {
        label: COUNTDOWN_LABELS[index],
        time:
          valueConverted2Array.length === 1
            ? ["0", valueConverted2Array[0]]
            : valueConverted2Array,
      };
    });
  }, [timer]);

  useEffect(() => {
    setInterval(() => {
      setTimer((currTime) => currTime - 1);
    }, ONE_SECOND);
  }, []);

  return countdown.map((slot, index1) => (
    <li key={index1}>
      <TimeSlot>
        {slot.time.map((value, index2) => (
          <Item key={index2}>{value}</Item>
        ))}
      </TimeSlot>
      <TimeSlotLabel>{slot.label}</TimeSlotLabel>
    </li>
  ));
}
