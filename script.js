'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);
/**document.querySelector(".number").textContent = secretNumber;*/

const guess = document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = "No Number";
    } else if (guess > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Too High";
            score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lost";
            document.querySelector('body').style.backgroundColor = "#ff3333"
        }
    } else if (guess < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Too low";
            score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost";
            document.querySelector('body').style.backgroundColor = "#ff3333"
        }
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "You won";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347"
        const highScore = document.querySelector('.highscore').textContent = score;
        if (highScore <= score) {
            document.querySelector('highscore').textContent = highScore;
        } else {
            document.querySelector('highscore').textContent = score;
        }
    }
})

const again = document.querySelector('.again').addEventListener('click', function() {
    document.querySelector(".number").textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector('body').style.backgroundColor = "#222"
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start guessing....";
})