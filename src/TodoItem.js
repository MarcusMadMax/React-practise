import React from 'react'

const TodoItem = (props) => {
    return (
        <div className="todos">
            <input
                id='checkbox'
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleClick(props.item.id)}
            />
            <h1>{props.item.text}</h1>
        </div>
    )
}

export default TodoItem