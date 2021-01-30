var started = false;
var obj = document.getElementById("mainTextCol");
var textSize = 120;
var sizeModifier = -2;
var switchCounter = Math.floor(Math.random() * 10) + 1;;
var newLookCounter = 1000;

var currentScore = 0;
var scoreMultiplier = 1;

var autoscroll = false;

let rareTextArray = 
[
	{
		rareName: "bonjour",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"bonjour\")'>BONJOUR</div>",
		threshold: 100
	},
	{
		rareName: "hola",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"hola\")'>HOLA</div>",
		threshold: 100
	},
	{
		rareName: "zdravstvuyte",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"zdravstvuyte\")'>ZDRAVSTVUYTE</div>",
		threshold: 100
	},
	{
		rareName: "salve",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"salve\")'>SALVE</div>",
		threshold: 100
	},
	{
		rareName: "konnichiwa",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"konnichiwa\")'>KONNICHIWA</div>",
		threshold: 100
	},
	
	{
		rareName: "red",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='color:red; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"red\")'>HELLO</div>",
		threshold: 500
	},
	{
		rareName: "blue",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='color:blue; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"blue\")'>HELLO</div>",
		threshold: 500
	},
	{
		rareName: "yellow",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='color:yellow; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"yellow\")'>HELLO</div>",
		threshold: 500
	},
	{
		rareName: "green",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='color:green; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"green\")'>HELLO</div>",
		threshold: 500
	},
	{
		rareName: "brown",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='color:brown; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"brown\")'>HELLO</div>",
		threshold: 500
	},
	
	{
		rareName: "comic_sans",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-family:Comic Sans MS; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"comic_sans\")'>HELLO</div>",
		threshold: 1000
	},
	{
		rareName: "jokerman",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-family:Jokerman; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"jokerman\")'>HELLO</div>",
		threshold: 1000
	},
	{
		rareName: "impact",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-family:Impact; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"impact\")'>HELLO</div>",
		threshold: 1000
	},
	{
		rareName: "times_new_roman",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-family:Times New Roman; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"times_new_roman\")'>HELLO</div>",
		threshold: 1000
	},
	{
		rareName: "lucida_console",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-family:Lucida Console; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"lucida_console\")'>HELLO</div>",
		threshold: 1000
	},
	
	{
		rareName: "cute_link",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"cute_link\")'><a href='https://www.youtube.com/watch?v=W86cTIoMv2U&feature=share&ab_channel=BBC' target='_blank'>HELLO</a></div>",
		threshold: 1500
	},
	{
		rareName: "amazing_link",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"amazing_link\")'><a href='https://matias.ma/nsfw/' target='_blank'>HELLO</a></div>",
		threshold: 1500
	},
	{
		rareName: "large_link",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"large_link\")'><a href='https://www.google.com' target='_blank'>HELLO</a></div>",
		threshold: 1500
	},
	{
		rareName: "charity_link",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"charity_link\")'><a href='https://www.bluecross.org.uk/' target='_blank'>HELLO</a></div>",
		threshold: 1500
	},
	
	{
		rareName: "steel",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='background: linear-gradient(to bottom, #A9A9A9 22%, #C0C0C0 26%, #D3D3D3 27%,#A9A9A9 40%,#808080 78%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;color: #fff;font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"steel\")'>HELLO</div>",
		threshold: 2000
	},
	{
		rareName: "gold",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='background: linear-gradient(to bottom, #cfc09f 22%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;color: #fff;font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"gold\")'>HELLO</div>",
		threshold: 2000
	},
	{
		rareName: "rainbow",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);-webkit-background-clip: text;-webkit-text-fill-color: transparent;color: transparent;font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"rainbow\")'>HELLO</div>",
		threshold: 2000
	},
	{
		rareName: "transparent",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='opacity:0.5; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"transparent\")'>HELLO</div>",
		threshold: 2000
	},
	{
		rareName: "comic",
		htmlPT1:"<div class='mainText' id='",
		htmlPT2:"' style='-webkit-text-stroke: 2px black; font-size: ",
		htmlPT3:"px;' onclick='rareTextFound(\"",
		htmlPT4:"\", \"comic\")'>HELLO</div>",
		threshold: 2000
	}
];

function startSpawn()
{
	if(!started)
	{
		document.getElementById("clickMeToStart").style.display = "none";
		document.getElementById("cookieNote").style.display = "none";
		readCurrentProgress();
		
		var delay = 0;
		
		for (i = 0; i < 30; i++) 
		{
			sleep(delay).then(() => { 
				if(obj.scrollHeight <= obj.clientHeight)
				{
					obj.insertAdjacentHTML("beforeend", "<div class='mainText' style='font-size: "+textSize.toString()+"px;'>HELLO</div> "); 
					
					const origAudio = document.getElementById("startingTextThud");
					const newAudio = origAudio.cloneNode();
					newAudio.play();
					
					textSize += sizeModifier;
					currentScore += scoreMultiplier;
					document.getElementById("scoreCounter").innerHTML = currentScore;
				}
			});
			delay += 200;
		}
		started = true;
		
		document.getElementById("gameHeader").style.display = "";
		document.getElementById("scoreCounter").innerHTML = currentScore;
	}
}

function spawnText()
{
	if(switchCounter < 1 || (textSize < 10 && sizeModifier < 0) || (textSize > 140 && sizeModifier > 0))
	{
		sizeModifier = (sizeModifier / -(Math.abs(sizeModifier))) * (Math.floor(Math.random() * 5) + 1);
		switchCounter = Math.floor(Math.random() * 50) + 10;
	}
	
	if((obj.scrollHeight/2) - obj.scrollTop - obj.clientHeight < 50)
	{
		if(newLookCounter > 1)
			obj.insertAdjacentHTML("beforeend", "<div class='mainText' style='font-size: "+textSize.toString()+"px;'>HELLO</div>"); 
		else 
		{
			var rareText = Math.floor(Math.random() * rareTextArray.length);
			if(rareTextArray[rareText].threshold < currentScore)
				obj.insertAdjacentHTML("beforeend", rareTextArray[rareText].htmlPT1 + currentScore.toString() + rareTextArray[rareText].htmlPT2 + textSize.toString() + rareTextArray[rareText].htmlPT3 + currentScore.toString() + rareTextArray[rareText].htmlPT4); 
			else 
				obj.insertAdjacentHTML("beforeend", "<div class='mainText' style='font-size: "+textSize.toString()+"px;'>HELLO</div>"); 
		}
		
		textSize += sizeModifier;
		switchCounter--;
		newLookCounter--;
		currentScore += scoreMultiplier;
		
		document.getElementById("scoreCounter").innerHTML = currentScore;
	}
	
	if(newLookCounter < 1)
	{
		newLookCounter = 169; 
		saveCurrentScore();
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleRareDisplay()
{
	var displayRow = document.getElementById("rareDisplayRow");
	
	if(displayRow.style.display == "none")
		displayRow.style.display = "";
	else
		displayRow.style.display = "none";
}

function noteRareTexts()
{
	var currentThreshold = 0 
	var rareobj = document.getElementById("rareDisplayCol");
	for (i = 0; i < rareTextArray.length; i++) {
		if(rareTextArray[i].threshold > currentThreshold)
		{
			currentThreshold = rareTextArray[i].threshold;
			rareobj.insertAdjacentHTML("beforeend", "<br><div class='neededThresholdNote'>THESE WILL APPEAR AFTER "+currentThreshold+" GREETINGS</div>"); 
		}
		rareobj.insertAdjacentHTML("beforeend", "<div class='rareNote disabled' id='"+rareTextArray[i].rareName+"'>"+rareTextArray[i].rareName+"&nbsp;<span id='"+rareTextArray[i].rareName+"Counter'>0<span></div>"); 
	}
}

function rareTextFound(thisID, noteId)
{
	document.getElementById("pickup").play();
	$("#"+thisID).fadeOut();
	document.getElementById(noteId).classList.add("found");
	document.getElementById(noteId).classList.remove("disabled");
	
	document.getElementById(noteId + "Counter").innerHTML = parseInt(document.getElementById(noteId + "Counter").innerHTML) + 1;
	
	saveFoundRareText(noteId);
	
	if ($('div.disabled').length == false) {
		document.getElementById("end").play();
		document.getElementById("footer").style.display = "";
	}
}

function toggleAutoScroll()
{
	autoscroll = !autoscroll;
	var icon = document.getElementById("scrollIcon");
	icon.classList.toggle("fa-angle-double-down");
	icon.classList.toggle("fa-stop");
	pageScroll();
}

function pageScroll() {
	if(autoscroll)
	{
		obj.scrollBy(0,10);
		scrolldelay = setTimeout(pageScroll,4);
	}
}

function saveCurrentScore(){
	var now = new Date();
	var time = now.getTime();
	var expireTime = time + 10000*360000;
	now.setTime(expireTime);
	
	document.cookie = "score="+currentScore+";expires="+now.toGMTString()+";";
}

function saveFoundRareText(rareTextID)
{
	var existingCookieData = [];
	
	var rtext = "rareText=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');

	for(var i = 0; i <ca.length; i++) 
	{
		//delete blank spaces from array element's start
		while (ca[i].charAt(0) == ' ') 
			ca[i] = ca[i].substring(1);
		
		if (ca[i].indexOf(rtext) == 0)
		{
			var existingCookieData = ca[i].substring(rtext.length, ca[i].length);
			if(existingCookieData)
				existingCookieData = JSON.parse(existingCookieData);
			else
				existingCookieData = [];
		}
	}
	
	existingCookieData.push(rareTextID);
	var cookieDataJson = JSON.stringify(existingCookieData);
	
	var now = new Date();
	var time = now.getTime();
	var expireTime = time + 10000*360000;
	now.setTime(expireTime);
	
	document.cookie = "rareText="+cookieDataJson+";expires="+now.toGMTString()+";";
}

function readCurrentProgress()
{
	var existingRareTextData = [];
	
	var score = "score=";
	var rtext = "rareText=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');

	for(var i = 0; i <ca.length; i++) 
	{
		//delete blank spaces from array element's start
		while (ca[i].charAt(0) == ' ') 
			ca[i] = ca[i].substring(1);
		
		if (ca[i].indexOf(score) == 0)
			currentScore = parseInt(ca[i].substring(score.length, ca[i].length));
		
		if (ca[i].indexOf(rtext) == 0)
		{
			var existingRareTextData = ca[i].substring(rtext.length, ca[i].length);
			if(existingRareTextData)
				existingRareTextData = JSON.parse(existingRareTextData);
			else
				existingRareTextData = [];
		}
	}
	
	for(var i = 0; i <existingRareTextData.length; i++)
	{
		document.getElementById(existingRareTextData[i]).classList.add("found");
		document.getElementById(existingRareTextData[i]).classList.remove("disabled");
		document.getElementById(existingRareTextData[i] + "Counter").innerHTML = parseInt(document.getElementById(existingRareTextData[i] + "Counter").innerHTML) + 1;
	}
}

function resetGame()
{
	document.cookie = "score=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	document.cookie = "rareText=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	location.reload();
}

