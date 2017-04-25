import React, { Component } from 'react';
import Board from './Board';
import Button from './Button';
import {checkWinner, getGameStatus, getButtonValue} from '../gameLogic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      gameMessage: "Player T's Turn",
      score: [0, 0],
      buttonValue: "reset",
      gameFinished: false
    };
  }

/**
click event handler for clicking a
square on the board to make a move
**/
  handleTurn(i){
    //first make sure the game isn't already finished
    if(this.state.gameFinished){
      return;
    }
    // Check to see if it is a valid move
    if(!this.checkIfValidMove(i)){
      this.setState({
        gameMessage: `Please make a valid move, Player ${this.state.xIsNext ? 'T' : 'P'}`
      });
      return;
    }
    //get the current state of the board
    let squares = this.state.squares
    //determine which token the current turn should be marked with
    squares[i] = this.state.xIsNext ? 'T' : 'P';
    //check to see if there is a winner
    let winner = checkWinner(squares);
    //update the state with the new states
    this.setState({
      //current state of the board
      squares: squares,
      //determine which player is next
      xIsNext: !this.state.xIsNext,
      //determine message to display next player, or if game is won or tie
      gameMessage: this.getGameStatus(winner),
      //get value of button depending on whether game is over or still going
      buttonValue: getButtonValue(squares),
      //true or false determining whether game is over
      gameFinished: this.checkGameFinished(winner)
    });
  }

  checkIfValidMove(i){
    return (this.state.squares[i]) ? false : true
  }

  checkGameFinished(winner){
    if(winner){
      return true
    }
    for (var i = 0; i < this.state.squares.length; i++){
      if (this.state.squares[i] == null){
        return false
      }
    }
    return true
  }

  getGameStatus(winner){
    if(winner){
      return `Player ${winner} is the Winner!`
    }
    if(!winner && this.checkGameFinished(winner)){
      return "Cats game!"
    }
    if(this.state.xIsNext){
      return "Player P's turn"
    }else{
      return "Player T's turn"
    }
  }

  clearGame(){
    // debugger
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      gameMessage: "Player T's Turn",
      score: [0, 0],
      buttonValue: "reset",
      gameFinished: false
    })
  }

  render() {
    return (
    <div>
      <div className="header">
        TTP <span>x</span> TTT
      </div>
      <div className="game-info">
        {this.state.gameMessage}
        <Button
          value={this.state.buttonValue}
          onClick={()=>this.clearGame()}
        />
      </div>
      <div className="game">
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleTurn(i)}
          />
      </div>
    </div>
    );
  }
}


export default Game;
