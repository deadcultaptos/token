import React, {useEffect, useState} from 'react'

function Countdown() {
    const [finish, setFinish] = useState(false)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

useEffect(() => {

const target = new Date("12/18/2022 23:59:59")

const interval = setInterval(() => {
const now = new Date()
const difference = target.getTime() - now.getTime()

const d = Math.floor(difference / (1000 * 60 * 60 * 24))
setDays(d);

const h = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
setHours(h)

const m = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
);
setMinutes(m)

const s = Math.floor(
    (difference % (1000 * 60)) / (1000)
);
setSeconds(s)


if (d <= 0 && h <= 0 && m <= 0 && s <= 0 ) {
    setFinish(true)
}

}, 1000)


return () => clearInterval(interval)
}, [])

    return (
    <div>
        {finish ? <h1>Time is Finish</h1> : 
        <div className='text-3xl md:text-4xl flex space-x-10 justify-center pt-10 clock'>
            <div className='flex justify-center flex-col'>
                <div>{days}</div> 
                <div className='text-maincolor uppercase text-sm'>Days</div>
            </div>
            <div className='flex justify-center flex-col'>
                <div>{hours}</div> 
                <div className='text-maincolor uppercase text-sm'>Hours</div>
            </div>
            <div className='flex justify-center flex-col'>
                <div>{minutes}</div> 
                <div className='text-maincolor uppercase text-sm'>Minutes</div>
            </div>
            <div className='flex justify-center flex-col'>
                <div>{seconds}</div> 
                <div className='text-maincolor uppercase text-sm'>Seconds</div>
            </div>
        </div> }
    </div>
  )
}

export default Countdown