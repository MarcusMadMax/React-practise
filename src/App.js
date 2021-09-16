import React from 'react'
import Product from './Product'
import productsData from './productsData'

class App extends React.Component {
  render() {
    const productComponent = productsData.map((item) => {
      return (
        <Product key={item.id} product={item} />
      )
    })
    return (
      <div className='wrapper'>
        {productComponent}
      </div>
    )
  }
}

export default App