import React from 'react'
import TodosData from './todosData'
import TodoItem from './TodoItem'

class App extends React.Component {
<<<<<<< HEAD
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
=======
  render() {
    const productComponent = productsData.map((item) => {
      return (
        <Product key={item.id} product={item} />
>>>>>>> 8ae70f8c46132541010c62f0fec9d5bac53fb363
      )
    })
    return (
      <div className='wrapper'>
<<<<<<< HEAD
        {todosItem}
=======
        {productComponent}
>>>>>>> 8ae70f8c46132541010c62f0fec9d5bac53fb363
      </div>
    )
  }
}

export default App