import React from 'react'
import PropTypes from 'prop-types';

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
}

function TodoItem({todo, index}) {
    return(
        <li style={style} onClick={() => console.log(todo.id)}>
            <span>
                <input
                    type='checkbox'
                    onChange={() => console.log(todo.id)}
                />
                <strong>{++index}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button onClick={() => console.log(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem