window.onload = init;
var images = [ "Zep1", "Zep2", "Zep3", "Zep4", "HousesHoly",
		"PhysicalGraffiti", "Presence", "InThroughOutDoor", "Coda", ];
var titles = [ "Led Zeppelin I", "Led Zeppelin II", "Led Zeppelin III",
		"Led Zeppelin IV", "Houses of the Holy", "Physical Graffiti",
		"Presence", "In Through the Out Door", "Coda", ];

var currentIndex = 0;

var isPlay = false;

var isFirst = true;

var isShuffle = false;

function init() {
	var shuffleButton = document.getElementById("shuffleButton");
	shuffleButton.onclick = handleShuffleButtonClick;
	var leftButton = document.getElementById("leftButton");
	leftButton.onclick = handleLeftButtonClick;
	var rightButton = document.getElementById("rightButton");
	rightButton.onclick = handleRightButtonClick;
	var imgTitle = document.getElementById("imgTitle");
	imgTitle.innerHTML = (currentIndex + 1) + ". " + titles[currentIndex];
	var currentImg = document.getElementById("currentImg");
	currentImg.src = "images/photos/" + images[currentIndex] + ".jpg";
}

function handleShuffleButtonClick() {
	if (isShuffle) {
		isShuffle = false;
	} else {
		isShuffle = true;
	}

}

function handleLeftButtonClick() {
	// alert(button);
	// if (!isShuffle) {
	// currentIndex--;
	// } else {
	// currentIndex = Math.floor(Math.random() * 8);
	// }
	// if (currentIndex < 0) {
	// currentIndex = images.length - 1;
	// }
	// var imgTitle = document.getElementById("imgTitle");
	// imgTitle.innerHTML = (currentIndex + 1) + ". " + titles[currentIndex];
	// var currentImg = document.getElementById("currentImg");
	// currentImg.src = "images/photos/" + images[currentIndex] + ".jpg";

	if (!isShuffle) {
		currentIndex--;
	} else {
		currentIndex = Math.floor(Math.random() * 8);
	}
	if (currentIndex < 0) {
		currentIndex = images.length - 1;
	}


	var imgTitle = document.getElementById("imgTitle");
	imgTitle.innerHTML = (currentIndex + 1) + ". " + titles[currentIndex];
	var currentImg = document.getElementById("currentImg");
	currentImg.src = "images/photos/" + images[currentIndex] + ".jpg";

}

function handleRightButtonClick() {
	if (!isShuffle) {
		currentIndex++;
	} else {
		currentIndex = Math.floor(Math.random() * 8);
	}
	if (currentIndex > images.length - 1) {
		currentIndex = 0;
	}

	var imgTitle = document.getElementById("imgTitle");
	imgTitle.innerHTML = (currentIndex + 1) + ". " + titles[currentIndex];
	var currentImg = document.getElementById("currentImg");
	currentImg.src = "images/photos/" + images[currentIndex] + ".jpg";

}

function handlePlayButtonClick(isRecursive) {
	if (isFirst) {
		playButton.style.backgroundImage = "url(images/icons/Pause.png)";
		isRecursive = true;
		isFirst = false;
	}
	if (!isPlay) {
		if (!isRecursive) {
			isPlay = true;
		} else {
			setTimeout(function() {
				handleRightButtonClick();
				handlePlayButtonClick(true);
			}, 2000);
		}
	} else {
		isFirst = true;
		playButton.style.backgroundImage = "url(images/icons/Play.png)";
		isPlay = false;
	}	
}
