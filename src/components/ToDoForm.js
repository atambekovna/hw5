import { useState } from "react";
import './ToDoForm.css'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="write something..."
            />        
            <button>Add</button>
        </form>
    )
}

export default ToDoForm