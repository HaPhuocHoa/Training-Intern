
import { useEffect, useState } from "react"


const formatTime = (date) => {
    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return(
        `${hours}:${minutes}:${seconds}`
    )
}

const Clock = () => {
const [dataTime, setDataTime] = useState( ' ' );
const [isHide, setIsHide] = useState(false)
const HideClock = () => {
    setIsHide(!isHide);
}
    useEffect(() => {
      const clockInterval =  setInterval(() => {
            const now = new Date()
            const newDataTime = formatTime(now)
            setDataTime(newDataTime)
        }, 1000);
        return () => {
            clearInterval(clockInterval)
        }
    }, []);

    return(
        <>
        <div>Time Now</div>
        {isHide &&        
        
        <div>
            {dataTime}
        </div>}
        {isHide && 
        <button
         onClick={() => HideClock()}
        >Hide</button>}
        {isHide === false&& 
        <button
         onClick={() => HideClock()}
        >Show</button>}
        </>
    )
}

export default Clock;