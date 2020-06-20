import React from 'react'
import NoteItem from './TodoItem'
import PropTypes from 'prop-types';

const style = {
    listStyle: 'none',
    margin: 0,
    padding: 0
}

function TodoList({todos}) {
    return(
        <ul style={style}>{
            todos.map((todo, index) => {
                return <NoteItem todo={todo} key={todo.id} index={index}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList