import React from 'react';
import './stopwatch.css';

export default function StopWatch() {

    // check if stopwatch is running
    const [isRunning, setIsRunning] = React.useState(false);
    // how much time has elapsed
    const [elapsedTime, setElapsedTime] = React.useState(0);
    // clear interval
    const intervalIdRef = React.useRef(null);
    // current time ref
    const startTimeRef = React.useRef(0);

    React.useEffect(() => {

        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${milliseconds.toString().padStart(2, '0')}`
    }

    return (
        <>
            <h1>StopWatch</h1>

            <div className="stopwatch">
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button className='startBtn' onClick={start}>Start</button>
                    <button className='stopBtn' onClick={stop}>Stop</button>
                    <button className='resetBtn' onClick={reset}>Reset</button>
                </div>
            </div>  
        </>
    )
}