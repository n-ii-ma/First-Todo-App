const Form = ({ handleInput, addTodo, inputText }) => {
  return (
    <form onSubmit={addTodo}>
      <label>
        <input value={inputText} type="text" onChange={handleInput} required />
        <button type="submit">Add Todo</button>
      </label>
    </form>
  );
};

export default Form;
