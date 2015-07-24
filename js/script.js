$(document).ready(function() {
	//Test view - show window size
	var windowSize = document.documentElement;
	$( '#testShoWinSize' ).html("Размер экрана: "+ windowSize.clientWidth +"х"+ windowSize.clientHeight);
});