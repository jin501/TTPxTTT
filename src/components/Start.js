import React, { Component } from 'react'
import Game from './Game';

class Start extends Component {
  handleStart(){
    return <Game />
  }

  render() {
    return (
      <div className="Start">
      // <button onClick={() => this.handleStart()}>Two Player Game</button>
      // <button onClick={() => this.handleStart()}>Play against Computer</button>
      < Game />
      </div>
    );
  }
}
export default Start;
