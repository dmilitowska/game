const prompt = require("prompt-sync")();

let field = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
  };
function boardOut() {
    console.log('\n' +
      ' ' + field[1] + ' | ' + field[2] + ' | ' + field[3] + '\n' +
      ' ---------\n' +
      ' ' + field[4] + ' | ' + field[5] + ' | ' + field[6] + '\n' +
      ' ---------\n' +
      ' ' + field[7] + ' | ' + field[8] + ' | ' + field[9] + '\n');
  }

 

  function checkIfEmpty(player) {
    if (field[player] === ' ') {
      return true
    } else {
      return false
    }
  }

  function fieldChange(player, letter) {
    field[player] = letter;
        
  }

  

 function computerChoice(){
    let available = (Object.keys(field).filter((k) => field[k] == ' '))
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
        user = parseInt(prompt( 'Select available field:'))
        choice(user)
        }
  } else {
    user = parseInt(prompt( 'Enter a number 1-9'))
    choice(user)
  }
}
function gameOn(){ 
    for (let i=1; i=9; i++){
    choice()
    computerChoice()
  }
  
  choice()
 }

  boardOut()
 gameOn()
// choice()

