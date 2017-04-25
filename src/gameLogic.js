export function getButtonValue(currentBoard){
  if(checkWinner(currentBoard)){
    return "new game"
  }else{
    return "reset"
  }
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
