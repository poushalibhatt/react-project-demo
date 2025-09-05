import {useState, useEffect} from 'react'

const CountDown = () => {

    const [timerId, setTimerId] = useState()
    const [count, setCount] = useState(0)

    const handleStart = () => {
        setTimerId(
            setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000)
        )
    }
    const handleStop = () => {
        clearInterval(timerId)
    }
    const handleReset = () => {
        clearInterval(timerId)
        setCount(0)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Resetr</button>

        </div>
    )
}

export default CountDown