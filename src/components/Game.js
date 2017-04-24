import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xTurn: true,
      gameStatus: "Player X's Turn",
      players: ""
    };
  }

  handleTurn(i){
    this.checkIfValidMove(i);
    let squares = this.state.squares
    squares[i] = this.state.xTurn ? 'X' : 'O';
    let status

    if (this.checkWinner(squares)) {
      this.getGameStatus(this.checkWinner(squares))
    }

    this.setState({
      squares: squares,
      xTurn: !this.state.xTurn,
      gameStatus: this.getGameStatus()
    });
    // debugger
  }

  checkIfValidMove(i){
    if(this.state.squares[i]){
      debugger
      this.setState({
        gameStatus: `Please make a valid move, Player ${this.state.xTurn}`
      })
      return;
    }
  }

  getGameStatus(winner){
    if(winner){
      return "WON"
      debugger
    }
    if(this.state.xTurn){
      return "Player O's turn"
    }else{
      return "Player X's turn"
    }
  }

  checkWinner(squares){
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
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
        </div>
      </div>
    );
  }
}


export default Game;
