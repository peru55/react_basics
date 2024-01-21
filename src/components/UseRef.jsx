import React, { useRef } from 'react';

export default function UseRef() {

    // const ref = useRef(0);
    const inputRef = useRef(null);

    React.useEffect(() => {
        console.log("Component rendered");
    })

    const handleClick = () => {
        // ref.current++;
        // console.log(ref.current);
        inputRef.current.focus();
        inputRef.current.value = "Hello";
        inputRef.current.style.backgroundColor = "red";
    }

    return (
        <>
            <h1>UseRef</h1>

            <button onClick={handleClick}>Click</button>

            <input type="text" ref={inputRef} />
        </>
    )
} 