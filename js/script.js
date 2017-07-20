var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
var minutesHTML = document.getElementById("minutes");
var secondsHTML = document.getElementById("seconds");
var seconds = 00;
var minutes = 00;
var myTimer;


startButton.onclick = startTimer;
pauseButton.onclick = pauseTimer;
resetButton.onclick = resetTimer;

function startTimer () {
	
	myTimer = setInterval (function () {
		
		if (seconds < 10) {
			secondsHTML.innerHTML = "0" + seconds;
		}
		if (seconds > 9) {
			secondsHTML.innerHTML = seconds;
		}
		
		seconds ++;
		
		if (seconds % 60 == 0) {
			minutes ++;
			seconds = 00;
		}
		
		if (minutes < 10) {
			minutesHTML.innerHTML = "0" + minutes;
		}
		
		if (minutes >= 10) {
			minutesHTML.innerHTML = minutes;
		}
		
	}		
	, 1000)
}


function pauseTimer () {
	clearInterval(myTimer);
}

function resetTimer () {
	seconds = 00;
	minutes = 00;
	secondsHTML.innerHTML = seconds;
	minutesHTML.innerHTML = minutes;
	
	console.log(secondsHTML + minutesHTML);
	clearInterval(myTimer);

}