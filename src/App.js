import React from 'react'
import TodosItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    const todoItem = this.state.todos.map((item) => <TodosItem key={item.id} item={item}
      handleClick={this.handleClick} />)
    return (
      <div className="wrapper">
        {todoItem}
      </div>
    )
  }
}

export default App