import React, {useState} from 'react';

export default function StateObject() {

    const [car, setCar] = useState({
        make: 'Honda',
        model: 'Civic',
        year: 2000
    })

    const handleYearChange = (e) => {
        setCar(c => {
            return {
                ...c,
                year: e.target.value
            }
        })
    }

    const handleMakeChange = (e) => {
        setCar(c => {
            return {
                ...c,
                make: e.target.value
            }
        })
    }

    const handleModelChange = (e) => {
        setCar(c => {
            return {
                ...c,
                model: e.target.value
            }
        })
    }

    return (
        <>
            <h1>Update Objects in State</h1>

            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <p>your favorite car is {car.year} {car.make} {car.model}</p>
        </>
    )
}