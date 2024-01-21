import React from "react"

function List () {

    const fruits = ["Apple", "Mango", "Orange", "Peach", "Pineapple"]

    const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)

    return (
            <>
                <h1>List of Fruits</h1>
                <ul>
                    {listItems}
                </ul>
            </>
        
    )

}

export default List