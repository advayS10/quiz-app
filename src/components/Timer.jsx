import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0, handleTimeout, stop} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(() => {
        setSeconds(initialSeconds)
        setMinutes(initialMinute)
    }, [initialMinute, initialSeconds]);

    useEffect(()=>{
        if(stop) return

        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    handleTimeout()
                    clearInterval(myInterval) 
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    }, [seconds, minutes, handleTimeout, stop]);

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? <h1 className='font-bold text-red-900'> {seconds}{seconds}</h1> 
            : <h1 className='font-bold text-red-900'> {minutes === 0 ? "" : minutes + ":"}{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;