import React from 'react'

const TodoItem = (props) => {

    return (
        <div className="todos">
            <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed} />
            <h1>{props.item.text}</h1>
        </div>
    )
}

export default TodoItem