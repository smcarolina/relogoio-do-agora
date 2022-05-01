import Countdown from "./countdown";
import { Item } from "./style";

export const finalDate = new Countdown("13 October 2032 20:00:00 GMT-0300")

export const renderClock = () => {
        
    return finalDate.total.map((tempo) => {
        return <Item>{tempo}</Item>
    })
}