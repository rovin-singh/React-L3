import React from "react";
const TodoList = ({ children }) => {
  return (
    <div>
      <h1>Here is Rovin's TodoList</h1>
      <ul>{children}</ul>
    </div>
  );
};
export default TodoList;
