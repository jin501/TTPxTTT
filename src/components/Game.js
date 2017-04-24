import React, { Component } from 'react';
import Board from './Board';
import Button from './Button';
import {checkWinner, getGameStatus, getButtonValue} from '../gameLogic';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xTurn: true,
      gameStatus: "Player T's Turn",
      score: [0, 0],
      buttonValue: "reset",
      gameFinished: false
    };
  }

  handleTurn(i){
    if(this.state.gameFinished){
      return;
    }
    //Check to see if valid move, i.e. there isn't already a token in that position by calling helper function checkIfValidMove
    if(!this.checkIfValidMove(i)){
      this.setState({
        gameStatus: `Please make a valid move, Player ${this.state.xTurn ? 'X' : 'O'}`
      });
      return;
    }

    let squares = this.state.squares
    squares[i] = this.state.xTurn ? 'T' : 'P';
    let status
    let winner = checkWinner(squares);
    this.setState({
      squares: squares,
      xTurn: !this.state.xTurn,
      gameStatus: this.getGameStatus(winner),
      buttonValue: getButtonValue(squares),
      gameFinished: this.checkGameFinished(winner)
    });
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

  checkIfValidMove(i){
    return (this.state.squares[i]) ? false : true
  }

  getGameStatus(winner){
    if(winner){
      return `Player ${winner} is the Winner!`
    }
    if(!winner && this.checkGameFinished(winner)){
      return "Cats game!"
    }
    if(this.state.xTurn){
      return "Player P's turn"
    }else{
      return "Player T's turn"
    }
  }

  render() {
    return (
      <div className="game">
        <div>
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleTurn(i)}
          />
        </div>
        <div className="game-info">
          {this.state.gameStatus}
          <Button value={this.state.buttonValue} />
        </div>
      </div>
    );
  }
}


export default Game;
