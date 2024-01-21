import React, {useState} from 'react';

export default function ArrayObjectState() {

    const [cars, setCars] = useState([])
    const [year, setYear] = useState(new Date().getFullYear())
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')

    const handleAdd = () => {
        const newCar = {year: year, make: make, model: model}

        setCars(c => [...c, newCar])

        setYear(new Date().getFullYear())
        setMake('')
        setModel('')

    }

    const handleDelete = (index) => {
        setCars(c => c.filter((_, i) => i !== index))
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    const handleMakeChange = (e) => {
        setMake(e.target.value)
    }

    const handleModelChange = (e) => {
        setModel(e.target.value)
    }

    return (
        <>
            <h1>Update Array of Objects in State</h1>

            <div>
                <ul>
                    {cars.map((car, index) => {
                        return <li key={index}>{car.year} {car.make} {car.model} 
                        <button onClick={() => handleDelete(index)}>Delete</button></li>
                    })}
                </ul>


                <label>Year</label> 
                <input type="number" value={year} onChange={handleYearChange} />

                <label>Make</label> 
                <input type="text" value={make} onChange={handleMakeChange} placeholder='car make'/>

                <label>Model</label> 
                <input type="text" value={model} onChange={handleModelChange} placeholder='car model'/>

                <button onClick={handleAdd}>Add</button>
            </div>
        </>
    )
}