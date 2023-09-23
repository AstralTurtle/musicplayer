audioTrack = document.getElementById("audioTrack1");
controldiv = document.getElementById("playpausediv");
volumeSlider = document.getElementById("volume");
skip = document.getElementById("playRandom");
songTitle = document.getElementById("songTitle");

musicArr = [];

window.getMusic.send();

window.getMusic.recieve((response) => {
	musicArr = response;
});

window.onload = () => {
	audioTrack.play();
};

function playPause() {
	if (audioTrack.paused) {
		audioTrack.play();
		play.style.display = "none";
		pause.style.display = "block";
	} else {
		audioTrack.pause();
		play.style.display = "block";
		pause.style.display = "none";
	}
	console.log(musicArr);
}

const volume = () => {
	audioTrack.volume = volumeSlider.value / 200;
};

function playRandom() {
	songPath = musicArr[Math.floor(Math.random() * musicArr.length)];
	audioTrack.src = songPath;
	audioTrack.play();
	songTitle.innerHTML = songPath.split("/")[2].split(".")[0];
}

controldiv.addEventListener("click", playPause);

volumeSlider.addEventListener("input", volume);

skip.addEventListener("click", playRandom);

audioTrack.addEventListener("ended", playRandom);
