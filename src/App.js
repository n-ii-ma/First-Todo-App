import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Dinner',
      completed: false
    },
    {
      id: 2,
      text: 'Shopping',
      completed: false
    },
    {
      id: 3,
      text: 'Project',
      completed: false
    }
  ])

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
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
  };

  return (
    <div className="App">
      <header>Todo</header>
      <Form 
      handleInput={handleInput} 
      handleSubmit={handleSubmit} 
      inputText={inputText}
      />
    </div>
  );
}

export default App;
