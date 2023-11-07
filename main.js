$(function() {
  gameBoard.createGameBoard();
  gameBoard.createPlayer();
})

const gameBoard = {
  gameSquares: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  
  createGameBoard: function() {
    for (let i = 0; i < this.gameSquares.length; ++i) {
      let newSquare = $('<div>').addClass(`square${i} game-square border-2 border-slate-900`)
      $('.game-grid').append(newSquare)
    }
  },

  createPlayer: function() {
    $('#submit-players').on('click', (event) => {
      event.preventDefault();
      const playerX = Player($('#player-x').val(), 'X');
      const playerO = Player($('#player-o').val(), 'O');

      return { playerX, playerO }
    }) 
  }
}



function Player(name, mark) {
  let score = 0;
  let playerMark = mark
  const gameWin = () => {
    score++
  }

  return { name, score, playerMark }
}


const controlGameFlow = {
  gameTurn: 0,
  currentMarker: '',

  checkBox: function() {
    if (this.gameTurn === 0) {
      this.currentMarker = 'X';
    } else if (this.gameTurn === 1) {
      this.currentMarker = 'O';
    }
  }
}