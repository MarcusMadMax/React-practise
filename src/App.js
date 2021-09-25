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
  }
  handleClick(id) {
    console.log('Clicked!', id)
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