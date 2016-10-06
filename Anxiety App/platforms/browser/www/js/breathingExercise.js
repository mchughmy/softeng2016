function finish(){
	alert("Congrats!\nYou finished x minutes of breathing exercise!\nPlease track your current SUD on the next screen");
	localStorage.setItem("reason", "breathingPost");
	window.location.href = "sudTrack.html";
}