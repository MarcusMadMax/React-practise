import React from 'react'
import TodosData from './todosData'
import TodoItem from './TodoItem'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodosData
    }
  }
  render() {
    const todosItem = this.state.todos.map((item) => {
      return (
        <TodoItem key={item.id} item={item} />
      )
    })
    return (
      <div className='wrapper'>
        {todosItem}
      </div>
    )
  }
}

export default App