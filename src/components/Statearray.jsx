import React, {useState} from 'react';

export default function StateArray() {

    const [foods, setFoods] = useState(['pizza', 'burgers', 'sushi'])


    const handleAdd = () => {
        const newFood = document.getElementById('foodInput').value

        document.getElementById('foodInput').value = ''

        setFoods(f => [...f, newFood])
    }

    const handleRemove = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return (
        <>
            <h1>Update Arrays in State</h1>

            <ul>
                {foods.map((food, index) => {
                    return <li key={index} onClick={() => handleRemove(index)}>{food}</li>
                })}
            </ul>

            <input type="text" id='foodInput' placeholder='Add Food'></input>
            <button onClick={handleAdd}>Add</button>

        </>
    )

}