import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props){
    super()
    this.state={
      secondsLeft: props.initialCount
    }
  }
  render(){
    return (
<<<<<<< HEAD
      <div>{this.state.secondsLeft===0 ? 'Boom!': `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
      )
  }
    
=======
      
      { this.secondsLeft!==0 ? <p> {this.secondsLeft} seconds left before I go boom! </p>}
      {this.secondsLeft===0 ? <p>Boom!</p>})
  }
>>>>>>> 97f738c92fe3083796bfc97413bc1529485e1a93
}