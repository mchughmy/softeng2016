/*When the user accepts the ToS, they should be taken to the Home Screen*/
function accept(){
	window.location.href = "homeScreen.html";
}


/*When the user declines the ToS, the app should close*/
function decline(){
	navigator.app.exitApp();
}
