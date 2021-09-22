import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      whatTodos: todosData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    console.log('Slick!', id)
  }

  render() {
    const todos = this.state.whatTodos.map(item =>
      <TodoItem key={item.id} item={item} handleClick={this.handleClick} />
    )
    return (
      <div className='wrapper'>
        {todos}
      </div>
    )

  }
}

export default App