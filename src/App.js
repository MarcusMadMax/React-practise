import React from 'react'
import todosData from './todosData'
import TodosItem from './TodoItem'

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
      console.log(updatedTodos)
      return {
        todos: updatedTodos
      }
    })
  }
  render() {
    let todo = this.state.todos.map((item) => {
      return (
        <TodosItem key={item.id} item={item} handleClick={this.handleClick} />
      )
    })
    return (
      <div className="wrapper">
        {todo}
      </div>
    )
  }
}

export default App