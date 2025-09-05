import React,{useState, useEffect} from 'react'

const Timer = () => {

    const [timeCount, setTimeCount] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const deadline = "September 31, 2025 23:59:59";
    const getTime = () => {
        const timeleft = Date.parse(deadline) - Date.now()
        console.log(timeleft)

        if(timeleft <= 0) {
            setTimeCount({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            })
            return
        }

        setTimeCount({
           days:  Math.floor(timeleft/(1000 * 60 * 60 * 24)),
           hours: Math.floor(timeleft/(1000 * 60 * 60) % 24),
           minutes: Math.floor(timeleft/(1000 * 60 ) % 60),
           seconds: Math.floor(timeleft/(1000 ) % 60)
        })

    }

    useEffect(() => {
        getTime()
        const interval = setInterval(getTime, 1000)
        return () => clearInterval(interval)
    }, [])

    const formatTime = (time) => (time < 10 ? "0" + time : time)
  return (
    <div>
        <p>Days {formatTime(timeCount.days)}</p>
        <p>Hour {formatTime(timeCount.hours)}</p>
        <p>Min {formatTime(timeCount.minutes)}</p>
        <p>Sec {formatTime(timeCount.seconds)}</p>
    </div>
  )
}

export default Timer