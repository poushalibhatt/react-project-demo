import React,{useState} from 'react'

const Count = () => {

    const [count, setCount] = useState(0)
    const handleStart = () => {
        setInterval(() => {
            setCount(prev => prev + 1)
        }, [1000])

        clearInterval()
    }

    const handleStop = () => {
        clearInterval()
    }

    const handleReset = () => {}

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