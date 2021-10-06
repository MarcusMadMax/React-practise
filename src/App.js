import React from 'react'
import Collapsible from './Collapsible'

function App() {
  return (
    <div className='wrapper'>
      <Collapsible label='Lets see'>
        <h1>Hello there</h1>
        <h3>Please answer this question</h3>
      </Collapsible>
      <Collapsible label='Some more'>
        <form action="">
          <label htmlFor="question1">Question 1</label>
          <input type="text" id='question1' />
        </form>
      </Collapsible>
      <Collapsible label='And more'>
        <form action="">
          <label htmlFor="question2">Question 2</label>
          <input type="text" id='question2' />
          <label htmlFor="question3">Question 3</label>
          <input type="text" id='question3' />
          <label htmlFor="comment">Please let us know how you feel</label>
          <textarea />
        </form>
      </Collapsible>
      <Collapsible label='More questions'>
        <form action="">
          <label htmlFor="question2">Question 4</label>
          <input type="text" id='question4' />
          <label htmlFor="question3">Question 5</label>
          <input type="text" id='question5' />
          <label htmlFor="comment">We need your feedback</label>
          <textarea />
        </form>
      </Collapsible>
      <Collapsible label='About your credit' className='credit'>
        <form action="">
          <h3>What credit card are you applying for?</h3>
          <input type="radio" name='credit' />
          <label htmlFor="credit">visa</label>
          <input type="radio" name='credit' />
          <label htmlFor="credit">master</label>
        </form>
      </Collapsible>
    </div>
  )
}


export default App