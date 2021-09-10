import React from 'react'
import Jokes from './Jokes'
import jokesData from './jokesData'

const App = () => {

  const jokeComponents = jokesData.map((joke) => {
    return (
      <Jokes key={joke.id} question={joke.question} answer={joke.punchLine} />
    )
  })

  // const jokeComponents = jokesData.map(joke => <Jokes question={joke.question} answer={joke.punchLine} />)

  return (
    <div className='jokes'>
      {jokeComponents}
    </div>
  );
}

export default App;