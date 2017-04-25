import React, { Component } from 'react';
import Board from './Board';
import Button from './Button';
import {checkWinner, checkIfValidMove, getGameMessage, getButtonValue} from '../gameLogic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      tIsNext: true,
      gameMessage: "Player T's Turn",
      buttonValue: "reset",
      gameFinished: false,
      turnCount: 0
    };
  }

/**
click event handler for clicking a
square on the board to make a move
**/
  handleTurn(i){
    // debugger
    //first make sure the game isn't already finished
    if(this.state.gameFinished){
      return;
    }
    // Check to see if it is a valid move
    if(!checkIfValidMove(i)){
      this.setState({
        gameMessage: `Please make a valid move, Player ${this.state.tIsNext ? 'T' : 'P'}`
      });
      return;
    }
    //get the current state of the board
    let squares = this.state.squares
    //determine which token the current turn should be marked with
    squares[i] = this.state.tIsNext ? 'T' : 'P';
    //check to see if there is a winner, returns "T", "P", or null
    let winner = checkWinner(squares);
    //true or false check to see if the board is filled or if there is a winner
    let gameFinished = (this.state.turnCount === 8 || winner) ? true : false

    //update the state with the new states
    this.setState({
      //current state of the board
      squares: squares,
      //determine which player is next
      tIsNext: !this.state.tIsNext,
      //determine message to display next player, or if game is won or tie
      gameMessage: getGameMessage(winner, this.state.turnCount, this.state.tIsNext),
      //get value of button depending on whether game is over or still going
      buttonValue: getButtonValue(gameFinished),
      //true or false determining whether game is over or not
      gameFinished: gameFinished,
      //keeps track of the turn count to account for when board is filled
      turnCount: this.state.turnCount + 1
    });
  }

  clearGame(){
    this.setState({
      squares: Array(9).fill(null),
      tIsNext: true,
      gameMessage: "Player T's Turn",
      score: [0, 0],
      buttonValue: "reset",
      gameFinished: false,
      turnCount: 0
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
