'use strict';
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

/*
// 1- Understand the problem
- Check button functions based on the value typed
- if it is win: the game turns into green, declare the number, and tell that you won, mark the highscore = score
- if the guessed number is higher: says too high, decrease one score
- if the guessed number is lower: says too low, decrease one score
- if the score reaches zero: it is a lose

// 2- break the problem into smaller problems
- Create the guessed number globally
- Implement check button function
- If input is nothing: "No data entry"
- If input is correct: it is win (Green background, You won, set highscore = score)
- If input is high & less: too high & too low + decrease score (Check score if it reaches zero its lose)
- Implement again function
*/

const resetGame = function (currentStatus) {
  currentStatus.statusMsg = 'Start guessing...';
  currentStatus.numberMsg = '?';
  currentStatus.score = 20;
  currentStatus.background = '#222';
  currentStatus.numberWidth = '15rem';
  currentStatus.gameFinished = false;
  currentStatus.createTarget();
  updateGame(currentStatus);
};

const updateGame = function (currentStatus) {
  const statusMsg = document.querySelector('.message');
  const number = document.querySelector('.number');
  const scoreMsg = document.querySelector('.score');
  const highscoreMsg = document.querySelector('.highscore');
  const background = document.querySelector('body');

  statusMsg.textContent = currentStatus.statusMsg;
  number.textContent = currentStatus.numberMsg;
  scoreMsg.textContent = String(currentStatus.score);
  highscoreMsg.textContent = String(currentStatus.highscore);
  background.style.backgroundColor = currentStatus.background;
  number.style.width = currentStatus.numberWidth;
};

let gameStatus = {
  statusMsg: 'Start guessing...',
  numberMsg: '?',
  score: 20,
  highscore: 0,
  background: '#222',
  numberWidth: '15rem',
  gameFinished: false,
  createTarget: function () {
    this.targetNumber = Math.trunc(Math.random() * 20) + 1;
  },
};

resetGame(gameStatus);

document.querySelector('.check').addEventListener('click', function () {
  if (gameStatus.gameFinished) return;
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, ' guess');
  if (!guess) {
    gameStatus.statusMsg = `⚠️ Data is not valid`;
  } else if (guess === gameStatus.targetNumber) {
    gameStatus.statusMsg = `🎉 You won.`;
    gameStatus.background = '#60b347';
    if (gameStatus.highscore < gameStatus.score)
      gameStatus.highscore = gameStatus.score;
    gameStatus.numberWidth = '30rem';
    gameStatus.gameFinished = true;
  } else if (guess > gameStatus.targetNumber) {
    if (gameStatus.score == 1) {
      gameStatus.statusMsg = '🥺 You lost.';
      gameStatus.numberWidth = '30rem';
      gameStatus.background = '#EE4B2B';
      gameStatus.gameFinished = true;
    } else {
      gameStatus.statusMsg = `📈 Too big.`;
      gameStatus.score--;
    }
  } else if (guess < gameStatus.targetNumber) {
    if (gameStatus.score == 1) {
      gameStatus.statusMsg = '🥺 You lost.';
      gameStatus.numberWidth = '30rem';
      gameStatus.background = '#EE4B2B';
      gameStatus.gameFinished = true;
    } else {
      gameStatus.statusMsg = `📉 Too low.`;
      gameStatus.score--;
    }
  }
  updateGame(gameStatus);
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame(gameStatus);
});
