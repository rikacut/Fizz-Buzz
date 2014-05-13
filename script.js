$(document).ready(function() {
	var num = prompt("Enter a number between 1-100");

	if (num>101) {
		alert("Please enter a number equal or smaller than 100.");
		location.reload();

	} else {

	for (var i=1; i<=num; i++){

		if (i%15===0){

		$("body").append("fizz buzz, ");

		}

		else if (i%5===0){

		$("body").append("buzz, ");

		}

		else if (i%3===0){

		$("body").append("fizz, ");

		}

		else {

		$("body").append(i+", ");

		}
	};

	};
});