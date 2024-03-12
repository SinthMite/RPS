const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const pieces = document.getElementById('pieces');
const piecesTwo = document.getElementById('piecesTwo');
const userPick = document.getElementById('userPick');
const cpuPick = document.getElementById('cpuPick');
const number = document.getElementById('number');

function cpu() {
    const random = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[random];
}

function hidePieces() {
    pieces.style.display = 'none';
    piecesTwo.style.display = 'none';
}

function showPiecesTwo() {
    pieces.style.display = 'none';
    piecesTwo.style.display = 'flex';
}
function showPiece(){
    pieces.style.display = 'flex';
    piecesTwo.style.display = 'none'; 
}
let score = 0
function gamePlay(playerChoice) {
    const computerChoice = cpu(); // Call cpu() once and store the result

    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log('Player wins!');
                score++;
                number.innerHTML = score;
                setTimeout(() => {
                    cpuPick.src = "images/icon-scissors.svg";
                    cpuPick.style.borderColor = 'hsl(230, 89%, 65%)';
                    cpuPick.style.boxShadow = '1px 10px hsl(230, 89%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)';
                }, 1000);
            } else if (computerChoice === 'paper') {
                console.log('Computer wins!');
                setTimeout(() => {
                    cpuPick.src = "images/icon-paper.svg";
                    cpuPick.style.borderColor = 'hsl(349, 70%, 56%)';
                    cpuPick.style.boxShadow = '1px 10px hsl(349, 71%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)';
                }, 1000);
            } else {
                setTimeout(() => {
                    cpuPick.src = userPick.src;
                }, 1000);
                console.log('It\'s a tie!');
            }
            break;

        case 'paper':
            if (computerChoice === 'rock') {
                console.log('Player wins!');
                score ++
                number.innerHTML = score;
                setTimeout(()=>{
                    cpuPick.src = "images/icon-rock.svg"
                    
                }, 1000)
            } else if (computerChoice === 'scissors') {
                console.log('Computer wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-scissors.svg"
                    cpuPick.style.borderColor = ' hsl(40, 84%, 53%)'
                    cpuPick.style.boxShadow = ' 1px 10px hsl(39, 89%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)'
                }, 1000)
            } else {
                setTimeout(()=>{cpuPick.src=userPick.src;
                }, 1000)
                console.log('It\'s a tie!');

            }
            break;

        case 'scissors':
            if (computerChoice === 'paper') {
                console.log('Player wins!');
                score ++
                number.innerHTML = score;
                setTimeout(()=>{
                    cpuPick.src = "images/icon-paper.svg"
                    cpuPick.style.borderColor = 'hsl(230, 89%, 65%)'
                    cpuPick.style.boxShadow = '1px 10px  hsl(230, 89%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)'

                }, 1000)
            } else if (computerChoice === 'rock') {
                console.log('Computer wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-rock.svg"
                    cpuPick.style.borderColor = ' hsl(349, 70%, 56%)'
                    cpuPick.style.boxShadow = '1px 10px  hsl(349, 71%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)'
                }, 1000)
            } else {
                setTimeout(()=>{cpuPick.src=userPick.src;
                })
                console.log('It\'s a tie!');

            }
            break;

        default:
            console.log('Invalid choice. Please choose rock, paper, or scissors.');
            break;
    }

    hidePieces();
    setTimeout(() => {
        showPiecesTwo();
        cpuPick.src = `images/icon-${computerChoice}.svg`;
    }, 1000);
    setTimeout(() => {
        showPiece();
    }, 4000);
}

rockElement.addEventListener('click', function() {
    userPick.src = "images/icon-rock.svg";
    userPick.style.borderColor = 'hsl(230, 89%, 65%)';
    userPick.style.boxShadow = '1px 10px hsl(230, 89%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)';
    gamePlay('rock');
    number.innerHTML = score;

});

paperElement.addEventListener('click', function() {
    userPick.src = "images/icon-paper.svg";
    userPick.style.borderColor = 'hsl(349, 70%, 56%)';
    userPick.style.boxShadow = '1px 10px hsl(349, 71%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)';
    gamePlay('paper');
    number.innerHTML = score;

});

scissorsElement.addEventListener('click', function() {
    userPick.src = "images/icon-scissors.svg";
    userPick.style.borderColor = ' hsl(40, 84%, 53%)'
    userPick.style.boxShadow = ' 1px 10px hsl(39, 89%, 40%), inset 0px 10px 1px 0px hsla(0, 0%, 0%, 0.1)'
    gamePlay('scissors');
    number.innerHTML = score;

});

console.log(score)