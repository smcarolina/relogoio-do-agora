import { useEffect, useMemo, useState } from "react";
import Countdown from './countdown';
import { Item } from "./style";

const FINAL_DATE = "13 May 2050 20:00:00 GMT-0300"
const finalDateObject = new Date(FINAL_DATE)

const ONE_SECOND = 1000 // in ms

export default function Timer () {
    const [timer, setTimer] = useState(finalDateObject.getTime())
    
    const countdown = useMemo(() => {
        const timerConverted2Date = new Date(timer)
        return new Countdown(timerConverted2Date)
    }, [timer])

    useEffect(() => {
        setInterval(() => {
            setTimer((currTime) => currTime - 1)
        }, ONE_SECOND)
    }, [])

    return countdown.total.map((value, index) => <Item key={index}>{value}</Item>)
}
