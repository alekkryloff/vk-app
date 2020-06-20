import React from "react";
import PropTypes from "prop-types";

const style = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ".5rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: ".5rem",
};

function TodoItem({ todo, index, onChange, removeTodo }) {
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={style}>
      <span onClick={() => onChange(todo.id)} className={classes.join(" ")}>
        <strong>{++index}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
