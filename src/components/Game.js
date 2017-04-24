import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xTurn: true,
      gameStatus: "Player X's Turn"
    };
  }

  handleTurn(i){
    let squares = this.state.squares
    squares[i] = this.state.xTurn ? 'X' : 'O';
    // if (this.calculateWinner(squares) || squares[i]) {
    //   debugger
    // }

    this.setState({
      squares: squares,
      xTurn: !this.state.xTurn,
      gameStatus: this.getGameStatus()
    });
  }

  getGameStatus(){
    return "hi"
    //return X or O
  }

  calculateWinner(squares){
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
