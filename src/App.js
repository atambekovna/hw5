import { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(),
        task: userInput,
        date: new Date().toLocaleDateString(),
      }
      setTodos([...todos, newItem])
    }
  }

  return (
    <div className="App">
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo todo={todo} key={todo.id} />
        )
      })}
    </div>
  );
}

export default App;
