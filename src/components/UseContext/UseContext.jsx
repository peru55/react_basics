import React from 'react';
import './usecontext.css'
import Component2 from './component2.jsx'

export const myContext = React.createContext()

export default function UseContext() {

    const [user, setUser] = React.useState('peru')

    return (
        <>
            <h1>UseContext</h1>
            <div className="box">
                <h2>UseContext component 1</h2>
                <myContext.Provider value={user}>
                    <Component2 />
                </myContext.Provider>
            </div>
        </>
    )
}