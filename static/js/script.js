player_name = prompt("enter name");
alert("Hello " + player_name);
player_guess = prompt("rock(1) paper(2) scissors(3)");
computer_guess = randomIntFromInterval(1, 3);
const game = ["rock", "paper", "scissors"];
alert("u guessed " + game[player_guess - 1]);
alert("the computer guessed " + game[computer_guess - 1]);
if (player_guess == computer_guess) {
  document.getElementById("user_feedback").innerHTML = "<em>draw</em>";
} else if (player_guess == 3 && computer_guess == 1) {
  document.getElementById("user_feedback").innerHTML =
    "<em>your buns at game</em>";
} else if (player_guess == 1 && computer_guess == 3) {
  document.getElementById("user_feedback").innerHTML = "<em>your winner</em>";
} else if (player_guess > computer_guess) {
  document.getElementById("user_feedback").innerHTML = "<em>your winner</em>";
} else {
  document.getElementById("user_feedback").innerHTML =
    "<em>your buns at the game</em>";
}
//if (player_guess)
function randomIntFromInterval(min, max) {
  //min max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//while (true) {
//alert("hi");
//}
