const Todo = ({ text, todos, setTodos, todo }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => (
        item.id !== todo.id
    )))
  };

  const handleComplete = () => {
    setTodos()

    console.log('hi')
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={handleComplete}>O</button>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Todo;
