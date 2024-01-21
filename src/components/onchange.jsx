import React, { useState } from 'react';

export default function OnChange() {
    const [name, setName] = useState('');
    const [shipping, setShipping] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.checked);
    }

    return (
        <>
            <input value={name} onChange={(e) => handleNameChange(e)} />
            <br />
            <label>{name}</label>

            <br />
            <label>Delivery</label>
            <input value="Delivery" type="checkbox" checked={shipping === "Delivery"} onChange={(e) => handleShippingChange(e)} />
            <br />
            <label>Pick up</label>
            <input value="Pickup" type="checkbox" checked={shipping === "Pick up"} onChange={(e) => handleShippingChange(e)} />
            <br />
            <p>Shipping : {shipping}</p>
        </>
    )
}
