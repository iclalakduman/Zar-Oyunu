let player1DiceValue = 0; 
let player2DiceValue = 0; 
let currentPlayer = 1; 
let rollSound = new Audio('./sounds/dice-1.mp3'); 
let rollSoundTwice = new Audio('./sounds/dice-2.mp3'); 

const player1Image = document.querySelector('.contentLeft img'); 
const player2Image = document.querySelector('.contentRight img'); 
const winnerText = document.querySelector('.winner p'); 
const buttons = document.querySelectorAll('.diceButton'); 

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
}


function buttonState() {
    if (currentPlayer === 1) {
        buttons[0].disabled = false; 
        buttons[1].disabled = true;  
    } else {
        buttons[0].disabled = true;  
        buttons[1].disabled = false; 
    }
}

buttons[0].addEventListener('click', function() {
    if (currentPlayer === 1) { 
        player1DiceValue = rollDice(); 
        rollSound.play();
        console.log("Oyuncu 1: " + player1DiceValue);
        player1Image.src = `img/${player1DiceValue}.png`;
        currentPlayer = 2; 
        buttonState(); 
    } 
});

buttons[1].addEventListener('click', function() {
    if (currentPlayer === 2) { 
        player2DiceValue = rollDice(); 
        rollSound.play();
        console.log("Oyuncu 2: " + player2DiceValue);
        player2Image.src = `img/${player2DiceValue}.png`; 
        currentPlayer = 1; 
        determineWinner(); 
        buttonState(); 
    } 
});

buttons[2].addEventListener('click', function() {
    player1DiceValue = rollDice();
    player2DiceValue = rollDice();
    rollSoundTwice.play();
    player1Image.src = `img/${player1DiceValue}.png`;
    player2Image.src = `img/${player2DiceValue}.png`;

    determineWinner(); 
    buttonState(); 
});

function determineWinner() {
    if (player1DiceValue > player2DiceValue) {
        winnerText.textContent = 'Oyuncu 1 Kazandı!';
    } else if (player2DiceValue > player1DiceValue) {
        winnerText.textContent = 'Oyuncu 2 Kazandı!';
    } else {
        winnerText.textContent = 'Berabere!';
    }

    player1DiceValue = 0;
    player2DiceValue = 0;
    currentPlayer = 1;
    buttonState(); 
}
