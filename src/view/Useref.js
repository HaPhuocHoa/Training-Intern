import { useEffect, useRef, useState } from "react"

const Uref = () => {

const [Number, setNumber] = useState(0);
const PreNumber = useRef(Number);

useEffect(() => {
    PreNumber.current = Number;
}, [Number])

const CountNumber = () => {
    setNumber(x => x + 1)
}

    return(
        <>
        <div>PreNumber : {PreNumber.current} </div>
        <div>Number : {Number} </div>
        <button
            onClick={() => CountNumber()}
        >Count</button>
        </>
    )
}

export default Uref
