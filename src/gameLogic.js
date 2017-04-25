/** helper functions for the game logic */


/** check to see if current move is valid
i.e. if it's already filled then it is invalid **/
export function checkIfValidMove(i, squares){
    return (squares[i]) ? false : true
  }

/** get value of button depending on current status of game **/
export function getButtonValue(gameFinished){
  return (gameFinished) ? "new game" : "reset"
}

/** checks to see if there is a winner yet based on the current board.
If winner exists, the token "T" or "P" is returned, else returns null **/
export function checkWinner(currentBoard){
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
    if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
      return currentBoard[a];
    }
  }
  return null;
}

/** finds out what the appropriate message is depending
on current Player and game status. **/
export function getGameMessage(winner, turnCount, tIsNext){
    if(winner){
      return `Player ${winner} is the Winner!`
    }
    if (turnCount === 8 && !winner){
      debugger
      return "It's a tie - Cat's game!"
    }
    if(tIsNext){
      return "Player P's turn"
    }else{
      return "Player T's turn"
    }
  }
