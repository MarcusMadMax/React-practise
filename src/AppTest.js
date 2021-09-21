import React from 'react';

class AppTest extends React.Component {
  constructor() {
    super()
    this.state = { name: 'Maxi' }
  }
  render() {
    let myName = document.getElementsByTagName('h1')
    if (this.state.name === 'Maxi') {
      myName.style.color = 'red'
    } else {
      myName.style.color = 'green'
    }
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div >
    )
  }

}

export default AppTest
