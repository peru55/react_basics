import React, {useContext} from 'react';
import './usecontext.css'
import {myContext} from './UseContext.jsx'

export default function Component4() {

    const user = useContext(myContext)

    return (
        <>
            <div className="box">
                <h2>UseContext Component 4</h2>
                <h3>welcome to the inner world {user}</h3>
            </div>
        </>
    )
}