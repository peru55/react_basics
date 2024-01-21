import React, {useState} from 'react'
import './todoList.css'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const handleAdd = () => {

        if (newTodo.trim() !== ''){
            setTodos(t => [...t, newTodo])
            setNewTodo('')
        }
    }

    const handleInputChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleDelete = (index) => {

        const updatedTodos = todos.filter((_, i) => i !== index)

        setTodos(updatedTodos)
    }

    // doesn't work
    const handleMoveUp = (index) => {
        if(index > 0){
            const updatedTodos = [...todos]
            [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]]
        }

        setTodos(updatedTodos)
    }

    // doesn't work
    const handleMoveDown = (index) => {}

    return (
        <div className='to-do-list'>
            <h1>Todo List</h1>

            <div>
                <input type="text" value={newTodo} placeholder='Enter new Todo' onChange={handleInputChange} />
                <button className='addBtn' onClick={handleAdd}>Add</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span className='todoText'>{todo}</span>
                        <button className='deleteBtn' onClick={() => handleDelete(index)}>Delete</button>
                        <button className='moveUpBtn' onClick={() => handleMoveUp(index)}>Move Up</button>
                        <button className='moveDownBtn' onClick={() => handleMoveDown(index)}>Move Down</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList