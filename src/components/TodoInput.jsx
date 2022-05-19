import React from "react";
const TodoInput = ({ addTodo }) => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Enter Something"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};
export default TodoInput;
