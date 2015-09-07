



// function askNumber () {
// 	var userInput = prompt("Type in your full phone number")
// 	if(userInput.length != 12 ){
// 		alert( "input correct formatting")
// 	} else if (userInput.length === 12)

// askNumber();

// alert(userInput)

var askNumber = prompt("type number")

if (askNumber.length === 12 && askNumber[3] === "-" && askNumber[7] === "-") {
	alert("Yay thanks")
}
else {
	alert("Are you having issues today?")
}

