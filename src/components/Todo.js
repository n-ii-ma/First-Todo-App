const Todo = ({ text, todos, setTodos, todo }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => (
        item.id !== todo.id
    )))
  };

  const handleComplete = () => {
    setTodos(todos.map((item) => {
        if (item.id === todo.id) {
            return {
                ...item,
                completed: !item.completed
            }
        }
        return item;
    }))

    console.log('hi')
  };

  return (
    <div>
      <li>{text}</li>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
};

export default Todo;
