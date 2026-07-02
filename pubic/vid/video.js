function openPlayer(identifier) {
	var url = "videoplayer.html?identifier=" + identifier;
	window.open(url);
}

function getVideo() {
	var url;
	var identifier;
	
	const player = document.getElementById("yes");
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	var identifier = urlParams.get('identifier');
	if (identifier != undefined) {
		player.setAttribute("controls","true");
	} else {
		var identifier = "static";
		player.setAttribute("loop","true");
	}
	const fileName = "https://cdn.badbunsen.com/videos/" + identifier + ".mp4";
	console.log("url is " + fileName + ".");
	
	function playVideo() { 
		player.src = fileName;
		window.addEventListener("load", function() {
			player.setAttribute("autoplay","true");
			audioElement.play();
		});
	}
	
	playVideo(fileName);
}