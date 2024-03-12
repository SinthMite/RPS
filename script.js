const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const pieces = document.getElementById('pieces');
const userPick = document.getElementById('userPick');
const cpuPick = document.getElementById('cpuPick');

function cpu() {
    const random = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[random];
}

function hidePieces() {
    pieces.style.display = 'none';
}

function gamePlay(playerChoice) {
    const computerChoice = cpu(); // Call cpu() once and store the result

    switch (playerChoice) {
        case 'rock':
            if (computerChoice === 'scissors') {
                console.log('Player wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-scissors.svg"
                }, 1000)
                
            } else if (computerChoice === 'paper') {
                console.log('Computer wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-paper.svg"
                }, 1000)
            } else {
                setTimeout(()=>{cpuPick.src=userPick.src;
                }, 1000)
                console.log('It\'s a tie!');

            }
            break;

        case 'paper':
            if (computerChoice === 'rock') {
                console.log('Player wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-rock.svg"
                }, 1000)
            } else if (computerChoice === 'scissors') {
                console.log('Computer wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-scissors.svg"
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
                setTimeout(()=>{
                    cpuPick.src = "images/icon-paper.svg"
                }, 1000)
            } else if (computerChoice === 'rock') {
                console.log('Computer wins!');
                setTimeout(()=>{
                    cpuPick.src = "images/icon-rock.svg"
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
}


rockElement.addEventListener('click', function() {
    gamePlay('rock');
    userPick.src = "images/icon-rock.svg";

});

paperElement.addEventListener('click', function() {
    gamePlay('paper');
    userPick.src = "images/icon-rock.svg"


});

scissorsElement.addEventListener('click', function() {
    gamePlay('scissors');
    userPick.src = "images/icon-rock.svg"

});