import React from 'react'
import Collapsible from './Collapsible'

function App() {
  return (
    <div className='wrapper'>
      <Collapsible label='lets see'>
        <h1>Hello there</h1>
        <h3>Please answer this question</h3>
      </Collapsible>
      <Collapsible label='some more'>
        <form action="">
          <label htmlFor="question1">Question 1</label>
          <input type="text" id='question1' />
        </form>
      </Collapsible>
      <Collapsible label='and more'>
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
    </div>
  )
}


export default App