import React from 'react'
import TodosData from './todosData'
import TodosItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todosData: TodosData
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todosData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todosData: updatedTodos
      }
    })
  }
  render() {
    let todos = todosData.map((item) => {
      return (
        <TodosItem key={item.id} item={item} handleClick={this.handleClick} />
      )
    })
    return (
      <div className="wrapper">
        {todos}
      </div>
    )
  }
}

export default App