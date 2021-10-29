const Form = ({ handleInput, addTodo, inputText }) => {
  return (
    <form onSubmit={addTodo}>
      <label>
        <input value={inputText} type="text" onChange={handleInput} required className='input-field' placeholder='Add Todo' />
        <button type="submit" className='add-todo'>Add Todo</button>
      </label>
    </form>
  );
};

export default Form;
