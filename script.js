

function restart() {
	window.location.href = "index.html";
}

const restartButton = document.getElementById("restart");
if (restartButton) {
	restartButton.addEventListener("click", restart);
}
function playSound(){
	
	const audio = new Audio('Ghost.mp3');

	audio.addEventListener('error', function (e) {
		console.error('Error loading the audio file:', e);
	});
	
	audio.play();
}

const soundEffectButton = document.getElementById("soundEffect");
if (soundEffectButton) {
	soundEffectButton.addEventListener("click", playSound);
}