'use strict';
// selecting an element from a page
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎊';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//we selected the button by .check,we added event listener to it to attach an event handler which is the function we have written down below and the event type it is handling is a click so we have specified that too.The function contains the code we want executed whenever the event occurs.We do not call the function the JS will call it as soon as the evnt happens
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; //we dont take const as score changes
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //here type is always string.As we have to compare this with a randoml generated number we change its type
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚫No Guess Made!';
    displayMessage('🚫No Guess Made!');
  }
  //when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎊Correct Number!';
    displayMessage('🎊Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //because at 0 we lose
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too hight!!' : '📉Too low!!';
      displayMessage(guess > secretNumber ? '📈Too hight!!' : '📉Too low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You Lost!';
      displayMessage('💥You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     //because at 0 we lose
  //     document.querySelector('.message').textContent = '📈Too hight!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Lost!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
