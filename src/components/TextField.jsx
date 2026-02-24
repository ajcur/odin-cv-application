function TextField({ editMode, labelText, text, handleChange }) {
  return (
    <div className="text-field">
      <label>{labelText}: </label>
      {editMode ? (
        <input value={text} onChange={handleChange} />
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

export { TextField };
