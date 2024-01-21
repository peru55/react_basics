import React, { useState, useEffect } from 'react';
import './useeffect.css';

export default function UseEffect () {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    useEffect(() => {
        document.title = `You clicked ${count} times ${color}`;
    }, [count, color]);

    return (
        <>
            <h1 style={{color : color}}>Count: {count}</h1>
            <button className='btn' onClick={() => setCount(c => c + 1)}>Add</button>
            <button className='btn' onClick={() => setCount(c => c - 1)}>Subtract</button>

            <button className='btn' onClick={() => setColor(c => c === 'red' ? 'green' : 'red')}>
                Change Color
            </button>
        </>
    )

}