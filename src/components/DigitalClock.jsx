import React, {useState, useEffect} from 'react';

export default function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = () => {
        let hour = time.getHours()
        const minutes = time.getMinutes()
        const seconds =time.getSeconds()
        
        const amPm = hour >= 12 ? 'PM' : 'AM'

        hour = hour % 12 || 12

        return `${pad(hour)}:${pad(minutes)}:${pad(seconds)} ${amPm}`
    }

    const pad = (num) => {
        // string concatenation
        return (num < 10 ? '0' : '') + num
    }

    return (
        <>
            {/* <h2>{new Date().toLocaleTimeString()}</h2> */}
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    )
}