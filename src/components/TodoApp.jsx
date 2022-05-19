import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);
  const addTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        value: newTodo
      }
    ]);
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo !== value));
    console.log(todos);
  };
  return (
    <div>
      TodoApp
      <TodoInput addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} deleteTodo={deleteTodo} />
        ))}
      </TodoList>
    </div>
  );
};
export default TodoApp;
