import React from 'react'
import TodoItem from './TodoItem'
import TodosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todosData: TodosData
    }
  }
  handleChange(id) {
    console.log('Cahnged!', id)
  }
  render() {
    const todos = this.state.todosData.map((item) =>
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    )
    return (
      <div className="wrapper">
        {todos}
      </div>
    )
  }
}

export default App