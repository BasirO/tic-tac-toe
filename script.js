var currentPlayer;
    var cells = document.querySelectorAll('.cell');
    var gameEnded = false;
    var symbolSelect = document.getElementById('symbol');
    var currentPlayerDisplay = document.getElementById('current-player');
    var turnAnnouncement = document.getElementById('turn-announcement');
    var resultPopup = document.getElementById('result-popup');
    var resultMessage = document.getElementById('result-message');

    symbolSelect.addEventListener('change', function(event) {
      currentPlayer = event.target.value;
      currentPlayerDisplay.textContent = 'Current Player: ' + currentPlayer;
      if (currentPlayer === 'O') {
        botMove();
      }
    });

    cells.forEach(function(cell) {
      cell.addEventListener('click', handleCellClick);
    });

    function handleCellClick(event) {
      var cell = event.target;

      if (cell.textContent !== '' || gameEnded) {
        return;
      }

      cell.textContent = currentPlayer;

      if (checkWin(currentPlayer)) {
        gameEnded = true;
        setTimeout(function() {
          showResultPopup('Player ' + currentPlayer + ' wins!');
        }, 500); // Delay in milliseconds before showing the result popup
        return;
      }

      if (checkDraw()) {
        gameEnded = true;
        setTimeout(function() {
          showResultPopup('It\'s a draw!');
        }, 500); // Delay in milliseconds before showing the result popup
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      currentPlayerDisplay.textContent = 'Current Player: ' + currentPlayer;
      turnAnnouncement.textContent = 'Turn: ' + currentPlayer;

    // Updated code
    if (currentPlayer === 'O') {
        setTimeout(botMove, 200); // Decreased delay to 200 milliseconds
      }
  
    }

    function botMove() {
      var bestScore = -Infinity;
      var bestMove;

      for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
          cells[i].textContent = currentPlayer;
          if (checkWin(currentPlayer)) {
            gameEnded = true;
            setTimeout(function() {
              showResultPopup('Player ' + currentPlayer + ' wins!');
            }, 500); // Delay in milliseconds before showing the result popup
            return;
          }
          cells[i].textContent = '';

          var score = minimax(cells, 0, false);

          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }

      cells[bestMove].textContent = currentPlayer;

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      currentPlayerDisplay.textContent = 'Current Player: ' + currentPlayer;
      turnAnnouncement.textContent = 'Turn: ' + currentPlayer;

      if (checkWin(currentPlayer)) {
        gameEnded = true;
        setTimeout(function() {
          showResultPopup('Player ' + currentPlayer + ' wins!');
        }, 500); // Delay in milliseconds before showing the result popup
        return;
      }

      if (checkDraw()) {
        gameEnded = true;
        setTimeout(function() {
          showResultPopup('It\'s a draw!');
        }, 500); // Delay in milliseconds before showing the result popup
        return;
      }
    }

    function minimax(board, depth, isMaximizing) {
      if (checkWin('X')) {
        return -1;
      } else if (checkWin('O')) {
        return 1;
      } else if (checkDraw()) {
        return 0;
      }

      var player = isMaximizing ? 'O' : 'X';
      var bestScore = isMaximizing ? -Infinity : Infinity;

      for (var i = 0; i < board.length; i++) {
        if (board[i].textContent === '') {
          board[i].textContent = player;
          var score = minimax(board, depth + 1, !isMaximizing);
          board[i].textContent = '';

          if (isMaximizing) {
            bestScore = Math.max(score, bestScore);
          } else {
            bestScore = Math.min(score, bestScore);
          }
        }
      }

      return bestScore;
    }

    function checkWin(player) {
      var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];

        if (cells[a].textContent === player && cells[b].textContent === player && cells[c].textContent === player) {
          return true;
        }
      }

      return false;
    }

    function checkDraw() {
      for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
          return false;
        }
      }

      return true;
    }

    function showResultPopup(message) {
      resultMessage.textContent = message;
      resultPopup.style.display = 'flex';
    }

    function resetBoard() {
      cells.forEach(function(cell) {
        cell.textContent = '';
      });

      currentPlayer = symbolSelect.value;
      currentPlayerDisplay.textContent = 'Current Player: ' + currentPlayer;
      turnAnnouncement.textContent = '';
      resultPopup.style.display = 'none';
      gameEnded = false;
    }