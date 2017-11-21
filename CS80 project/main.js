var current;
var easyLen = imagesEasy.length; // number of elements in easy object
var medLen = imageMed.length; // number of elements in med object
var hardLen = imageHard.length; // number of elements in hard object

function displayEasy(){	
	
	var rand = Math.floor((Math.random() * easyLen) + 1); //random number
	var img = imagesEasy[rand]; //pic link
	var imgLink = img.imgSrc;
	
	document.getElementById("image").src = imgLink; //change image src
	
	current = img;
}

function displayMed(){
	
	var rand = Math.floor((Math.random() * medLen) + 1); //random number
	var img = imageMed[rand]; //pic link
	var imgLink = img.imgSrc;
	
	document.getElementById("image").src = imgLink; //change image src
	
	current = img;
}


function displayHard(){
	
	var rand = Math.floor((Math.random() * hardLen) + 1); //random number
	var img = imageHard[rand]; //pic link
	var imgLink = img.imgSrc;
	
	document.getElementById("image").src = imgLink; //change image src
	
	current = img;
}

function compare(){   //this function compares the answer to easy name
	
	var answer = current.name;
	var tick = 0;		//counter	
	var guessVal = document.getElementById("guess"); //value for clearing
	var guess = document.getElementById("guess").value.toLowerCase(); //gives answer in lowercase
	var guessLen = guess.length; //number of characters in the guess
		
	while (tick < guessLen)   //while the counter is less then "len"
	{
		if (guess[tick] != answer[tick]) //if the characters do not match
		{  
			break; //end the loop
		}
		
		tick++; //increment if the characters do match
		
	}
	
	if (tick == answer.length) //if the counter length is as much as the length of the test string they are a match
	{
		document.getElementById("result").innerHTML = "You are Correct";
		console.log("correct");
		guessVal.value = ""; //clear textbox
	}
	else
	{
		document.getElementById("result").innerHTML = "You are Wrong";
		console.log("wrong");
	}
}

function giveUp(){
	
	document.getElementById("result").innerHTML = ("The answer is " + "\'" + current.name + "\'");
	
}