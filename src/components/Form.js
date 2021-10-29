const Form = ({ handleInput, handleSubmit, inputText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
        value={inputText}
        type='text' 
        onChange={handleInput}
        required
        />
        <button type='submit'>Submit</button>
      </label>
    </form>
  );
};

export default Form;
