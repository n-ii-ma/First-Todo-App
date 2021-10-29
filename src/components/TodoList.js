import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <ul className='list'>
        {todos.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
