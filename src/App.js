import React from 'react'
import Product from './Product'
import productsData from './productsData'

const App = () => {
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

export default App