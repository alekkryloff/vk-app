import React, { useState } from "react";
import { Input } from "@vkontakte/vkui";
import PropTypes from "prop-types";

const styles = {
  form: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    marginBottom: ".5rem",
  },
  input: {
    fontSize: "16px",
    marginRight: ".5rem",
  },
};

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <Input
        style={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" style={{ fontSize: "16px" }}>
        Add Task
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
