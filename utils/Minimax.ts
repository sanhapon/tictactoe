export function findBestMove(board: string[], depth: number, isMaximizingPlayer: boolean): number {
    const winner = calculateWinner(board);
  
    // Base case: If the game is over or the maximum depth has been reached, return the score.
    if (winner !== null || depth === 0) {
      return score(board, winner);
    }
  
    // Recursive case: If it's the maximizing player's turn (i.e., "X"), find the move that maximizes the score.
    if (isMaximizingPlayer) {
      let bestScore = -Infinity;
      let bestMove = -1;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          const score = findBestMove(board, depth - 1, false);
          board[i] = null;
          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }
      return bestMove;
    }
  
    // Recursive case: If it's the minimizing player's turn (i.e., "O"), find the move that minimizes the score.
    else {
      let bestScore = Infinity;
      let bestMove = -1;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          const score = findBestMove(board, depth - 1, true);
          board[i] = null;
          if (score < bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }
      return bestMove;
    }
  }
  
function score(board: string[], winner: string | null): number {
    // If "O" wins, return a score of -1. If "X" wins, return a score of 1. If it's a tie, return a score of 0.
    if (winner === 'O') {
        return -1;
    } else if (winner === 'X') {
        return 1;
    } else {
        return 0;
    }
}
  
const calculateWinner = (board: string[]): string | null  => {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
        if (board[i] !== null && board[i] === board[i + 1] && board[i] === board[i + 2]) {
            return board[i];
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[i] !== null && board[i] === board[i + 3] && board[i] === board[i + 6]) {
            return board[i];
        }
    }
    // Check diagonals
    if (board[0] !== null && board[0] === board[4] && board[0] === board[8]) {
        return board[0];
    }
    if (board[2] !== null && board[2] === board[4] && board[2] === board[6]) {
        return board[2];
    }
    // Check for tie
    if (board.every(square => square !== null)) {
        return 'tie';
    }
    // Game is not over yet
    return null;
}