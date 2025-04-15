var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is " + video.autoplay);
	console.log("Loop is " + video.loop);

	document.querySelector("#play").addEventListener("click", function () {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
	
	document.querySelector("#pause").addEventListener("click", function () {
		console.log("Pause Video")
		video.pause()
	});
	
	document.querySelector("#slower").addEventListener("click", function () {
		console.log("slow down video");
		video.playbackRate *= .90;
		console.log("Speed is", video.playbackRate);
	});
	
	document.querySelector("#faster").addEventListener("click", function () {
		console.log("Speed Up video")
		video.playbackRate /= .90;
		console.log("Speed is", video.playbackRate);
	});
	
	document.querySelector("#skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("current location of the video");
	});
	
	document.querySelector("#mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.innerHTML = video.muted ? "Unmute" : "Mute";
		console.log("Muted: " + video.muted)
	});
	
	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	});
	
	
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});
	
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
	
	
});

