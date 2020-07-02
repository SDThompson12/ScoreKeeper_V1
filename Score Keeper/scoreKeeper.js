var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var p1Score = 0;
var p2Score = 0;
var maxScoreChanger = document.querySelector("#maxScore");
var maxScore = 5;
var playingTo = document.querySelector("#playTo");
var gameOver = false;



p1.addEventListener("click", function(){
	if(!gameOver)
	{
		p1Score++;
		console.log("Player 1 Scored!");
		if(p1Score === maxScore)
		{
			gameOver = true;	
			alert("Player 1 Wins!");
			p1Display.classList.add("playerWins");
		}
	p1Display.textContent = p1Score;
	}});

p2.addEventListener("click", function(){
	if(!gameOver)
	{
		p2Score++;
		console.log("Player 2 Scored!");
		if(p2Score === maxScore)
		{
			gameOver = true;
			p2Display.textContent = p2Score;
			alert("Player 2 Wins!");
			p2Display.classList.add("playerWins");
		}
	p2Display.textContent = p2Score;
}});

reset.addEventListener("click", function(){
	resetButton();
});

maxScoreChanger.addEventListener("change", function(){
	maxScore = Number(maxScoreChanger.value);
	playingTo.textContent = maxScore;
});

function resetButton()
{
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("playerWins");
	p2Display.classList.remove("playerWins");
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	alert("The score has been reset.");
}