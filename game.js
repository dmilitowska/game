const prompt = require("prompt-sync")();

let field = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  };
function boardOut() {
    console.log('\n' +
      ' ' + field[1] + ' | ' + field[2] + ' | ' + field[3] + '\n' +
      ' ---------\n' +
      ' ' + field[4] + ' | ' + field[5] + ' | ' + field[6] + '\n' +
      ' ---------\n' +
      ' ' + field[7] + ' | ' + field[8] + ' | ' + field[9] + '\n');
  }
  const winningOptions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]
  function winner(player) {
    let count
    for (let i = 0; i < winningOptions.length; i++) {
      count = 0;
      for (let j = 0; j < winningOptions[i].length; j++) {
        if (field[winningOptions[i][j]] === player) {
          count++;
        }
        if (count === 3) {
          return true
        }
      }
    }
    return false
  }
 

  function checkIfEmpty(player) {
    if (field[player] === "") {
      return true
    } else {
      return false
    }
  }

  function fieldChange(player, letter) {
    field[player] = letter;
      }

  

 function computerChoice(){
    let available = (Object.keys(field).filter((k) => field[k] == ""))
    const int = available.map(a => parseInt(a))
    let random = Math.floor((Math.random())* int.length)
    let computer = int[random]
    if (checkIfEmpty(computer)) {
    let letter = "O"
 fieldChange(computer, letter)
 boardOut();
} else {
computerChoice()
}
 }


function choice(){
   
    let user = parseInt(prompt("Enter your choice of field: "));
  if (user === 1 || user === 2 || user === 3 || user === 4 || user === 5 || user === 6 || user === 7 || user === 8 || user === 9) {
        if (checkIfEmpty(user)) {
            let letter = "X"
         fieldChange(user, letter)
         boardOut();
        } else {
        user = parseInt(prompt( "Select available field:"))
        choice(user)
        }
  } else {
    user = parseInt(prompt( "Enter a number 1-9"))
    choice(user)
  }
}


function game(){ 
    
    choice()
    if (winner("X")) {console.log("You win!")}
    else{
    computerChoice()
    if (winner("O")){console.log("Computer wins!")} else {game()}}
  }
  
  
 

  boardOut()
 game()
// choice()

