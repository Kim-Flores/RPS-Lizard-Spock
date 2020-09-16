//House Moses: Kim, Carlosalberto, Farrah and Gabriel
let answer = document.getElementById('answer');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let button = document.querySelectorAll('button')



function findWinner(playerResult) {
  fetch(`/winner?playerResult=${playerResult}`)
    .then(response => response.json())
    .then((result) =>{
      console.log(result)
      if(result === false){
        document.getElementById('answer').innerHTML ='You lose!';
     } else if (result === true){
       document.getElementById('answer').innerHTML = 'You win!';
      }
      console.log("work")
   })
}
// if statement with innerHTML allows to display in DOM
// button.addEventListener("click", findWinner =>{
//   console.log("button clicks")
// });
button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let playerResult = event.target.value;
    findWinner(playerResult);
  });
});
