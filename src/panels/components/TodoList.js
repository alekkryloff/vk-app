import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const style = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

function TodoList({ todos, onToggle, removeTodo }) {
  return (
    <ul style={style}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={onToggle}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
