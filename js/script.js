var startButton = document.getElementById("start");
		pauseButton = document.getElementById("pause"),
		resetButton = document.getElementById("reset"),
		minutesHTML = document.getElementById("minutes"),
		secondsHTML = document.getElementById("seconds"),
		on = false,
		seconds = 00,
		minutes = 00;

var myTimer;

startButton.onclick = startTimer;
pauseButton.onclick = pauseTimer;
resetButton.onclick = resetTimer;

function startTimer () {
	if (!on) {
		myTimer = setInterval (function () {

				seconds ++;
				on = true;

				if (seconds < 10) {
					secondsHTML.innerHTML = "0" + seconds;
				}
				if (seconds > 9) {
					secondsHTML.innerHTML = seconds;
				}

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
}


function pauseTimer () {
	on = false;
	clearInterval(myTimer);
}

function resetTimer () {
	on = false;
	var defaultTime = "00";
	secondsHTML.innerText = defaultTime;
	minutesHTML.innerText = defaultTime;

	console.log(myTimer);
	clearInterval(myTimer);

}