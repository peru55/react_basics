import React, {useState} from 'react';
import './colorpicker.css';

export default function ColorPicker() {

    const [color, setColor] = useState('#FFFFFF');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <br />
            <div className="color-picker-container">
                <h1>My Color Picker</h1>
                <div className="color-display" style={{backgroundColor: color}}>
                    <p>Selected: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={(e) => handleColorChange(e)}/>
            </div>
        </>
    )
}