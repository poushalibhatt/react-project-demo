import React,{useEffect, useState} from 'react'

const Count = () => {

    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let timer

        if(isRunning) {
            timer = setInterval(() => {
                setCount(prev => prev + 1)
            }, [1000])
        }

        return () => clearInterval(timer)
    }, [isRunning])

    const handleStart = () => setIsRunning(true)
    const handleStop = () => setIsRunning(false)
    const handleReset = () => {
        setIsRunning(false)
        setCount(0)
    }
  return (
    <div>Count: {count}
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Count