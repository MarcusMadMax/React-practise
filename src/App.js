import React from 'react'
import Product from './Product'
import productsData from './productsData'

const App = () => {
  const productsComponent = productsData.map((item) => {
    return (
      <Product key={item.id} product={item} />
    )
  })
  return (
    <div className='wrapper'>
      {productsComponent}
    </div>
  )
}
export default App;