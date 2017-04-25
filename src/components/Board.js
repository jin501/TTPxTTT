import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {
  renderSquare(i) {
    const currentBoard = this.props.currentBoard;
    return <Square value={currentBoard[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div className="Board">
        <div className="board-row" id="horizontal-line">
          {this.renderSquare(0)}
          <div className id="vertical-line">
          {this.renderSquare(1)}
          </div>
          {this.renderSquare(2)}

        </div>
        <div className="board-row" id="horizontal-line">
          {this.renderSquare(3)}
          <div className id="vertical-line">
          {this.renderSquare(4)}
          </div>
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          <div className id="vertical-line">
          {this.renderSquare(7)}
          </div>
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
export default Board;
