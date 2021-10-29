const Todo = ({ text, todos, setTodos, todo }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='list-items'>
      <li className={todo.completed ? 'completed' : ''}>{text}</li>
      <button onClick={handleComplete} className='btn complete-btn'>Complete</button>
      <button onClick={handleDelete} className='btn remove-btn'>Remove</button>
    </div>
  );
};

export default Todo;
