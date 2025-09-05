import React, {useState, useEffect} from 'react'

const CountDownTimer = () => {

  const eventDate = "8 September, 2025"
  const eventTime = new Date(eventDate).getTime()

  const [timer, setTimer] = useState({
    days:0,
    hour:0,
    min:0,
    sec:0
  })


  const getTime = (diff) => {
    if(diff < 0) {
        setTimer({
          days:0,
          hour:0,
          min:0,
          sec:0
        })
        return
      }
    setTimer({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hour: Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      min: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
      sec: Math.floor(diff % (1000 * 60) / 1000)
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      let nowTime = new Date().getTime()
      let diffTime = eventTime - nowTime
      getTime(diffTime)
    }, 1000)

    return () => clearInterval(timer)
  }, [eventTime])

  return (
    <div>
      <p>Timer</p>
      <div>
        <p>{timer.days}</p>
        <p>{timer.hour}</p>
        <p>{timer.min}</p>
        <p>{timer.sec}</p>
      </div>
    </div>
  )
}

export default CountDownTimer