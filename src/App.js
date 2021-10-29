import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './reset.css';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    let newId = Math.floor(Math.random() * 1000)

    setTodos([
      ...todos,
      {
        id: newId,
        text: inputText,
        completed: false
      }
    ])

    setInputText('');
  };

  return (
    <div className="App">
      <header>My Todos</header>
      <Form 
      handleInput={handleInput} 
      addTodo={addTodo} 
      inputText={inputText}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
