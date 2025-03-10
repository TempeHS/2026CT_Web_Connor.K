player_name = prompt("enter name");
alert("Hello " + player_name);
player_guess = prompt("rock paper scissors");
computer_guess = randomIntFromInterval(1, 3);
const game = ["rock", "paper", "scissors"];
alert("u guessed " + game[player_guess - 1]);
alert("the computer guessed " + game[computer_guess - 1]);
if (player_guess == computer_guess) {
  document.getElementById("user_feedback").innerHTML = "<em>draw</em>";
} //if(player_guess ==) {
//document.getElementById("user_feedback").innerHTML =
//"<em>your buns at game</em>";
//}
function randomIntFromInterval(min, max) {
  //min max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//while (true) {
//alert("hi");
//}
