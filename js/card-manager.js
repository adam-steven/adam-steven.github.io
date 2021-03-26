const cardDataObjs = [{categorie:"Education" ,platform:"Python, OpenCV and Tkinter" ,pic:"printFailureDetection.png" ,title:"3D Print Failure Detection" 
					,hlink:"#" ,linkText:"Currently Under Development", linkIcon:"fa-github" 
					,Overview:"My honours project, it involved the research of pre-existing object detection, failure detection and user alert methods. To then implement the best-found methods onto a Raspberry Pi 3, examining in real world situations." 
					,Team:"Solo project." ,Contribution:"Researched and improved pre-existing object detection. Developed the failure detection, GUI, and user alert system."},
					
					{categorie:"Education" ,platform:"C, Python, OpenCV and AWS" ,pic:"trackingCameraCloseUp.gif" ,title:"Motion Tracking Camera"
					,hlink:"https://github.com/adam-steven/Motion-Tracking-Camera" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"This project consisted of two parts. An OpenCV (Python) based motion tracker that called a LKM to centre the larges moving object in the camera’s frame. And an AWS EC2 instance that retrieved and stored the cameras videos. As well as, hosting a secure website for the user to download these videos. <br/>The design revolved around creating a program that could efficiently run on a Raspberry Pi Zero, utilising a stepper motor and USB webcam." 
					,Team:"Solo project." ,Contribution:"Developed the LKM, efficient motion tracker, camera mount, EC2 configuration, and website."},
					
					{categorie:"Education" ,platform:"C# .NET Core" ,pic:"emotionDetection.png" ,title:"AI Emotion Detection" 
					,hlink:"https://github.com/adam-steven/AI-Emotion-Detection" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"This project involved the research of different pre-existing emotion detection algorithms and dataset gathering/cleaning techniques. To then implement the best-found methods of both areas to achieve an acceptable prediction accuracy (an accuracy achieved of 77%)." 
					,Team:"Solo project." ,Contribution:"Emotion detection research, implementation, and improvements. As well as moderating the AI dataset, and creating the GUI."},

					{categorie:"Education" ,platform:"Unity C#" ,pic:"aiGame.gif" ,title:"Game AI Comparison" 
					,hlink:"https://github.com/adam-steven/Game-AI-Comparison" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"As finite state machines are known for becoming hard to handle the more states are added. This project planned to test how a large finite state machine compared to a large weighted finite state machine, as the weighted version is far easier to implement. A Hot Line Miami style game was created in Unity (C#), and the two AI methods were implemented into the enemy AI. It was found that the users could not tell the differences between the enemies, however the weighted version was calculated as being easier." 
					,Team:"Solo project that included volunteer testers." ,Contribution:"Created the game (including all assets), level generation, finite state machine, and weighted finite state machine."},
					
					{categorie:"Education" ,platform:"Android Java and Google Firebase" ,pic:"mobileGame.png" ,title:"Mobile Game" 
					,hlink:"https://github.com/adam-steven/Mobile-Game" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"This project goal was to create a fun, simple Android mobile game, in Java, that saved high scores on to a Google Firebase Database in a similar vain to arcade score boards. The game used phone’s accelerometers and magnet field sensors to control the characters, saved personal high scores on to the phone, and notified the user to come back if they had not played in a few days." 
					,Team:"Solo project." ,Contribution:"Configured the Firebase Database, implemented the game (including all assets), and setup android user notifications."},
					
					{categorie:"Education" ,platform:"Website Development" ,pic:"MVCWebsite.png" ,title:"MVC MySQL Website" 
					,hlink:"https://github.com/adam-steven/MVC-Website" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"The project revolved around the creation of an easily scalable website (with any changes to the MySQL database being accurately reflected on the site), including dynamic functionality in a resizable form factor. A Model, View, Controller approach was taken to achieve these requirements and create an overall more secure website. (visual enhancements via CSS was not required)." 
					,Team:"Solo project." ,Contribution:"Developed the website via HTML, php, MySQL, and JavaScript."},
					
					{categorie:"Education" ,platform:"C# .NET Framework" ,pic:"secureMessageing.png" ,title:"Secure Messaging System" 
					,hlink:"https://github.com/adam-steven/Secure-Messaging-System" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"Like Facebook Messenger, end to end and data at rest encryption was the goal of this C# based project. Having X number of client applications sending data to a server application and the server transferring the data to its correct destination. Both the user accounts and messages were encrypted on a MySQL database so that the clients could log in and see previous messages. " 
					,Team:"Solo project." ,Contribution:"Developed the GUI, MySQL database, and security measures. As well as implementing client, server communication with SimpleTCP."},
					
					{categorie:"Education" ,platform:"C++ and OpenGL" ,pic:"mandelbrot.png" ,title:"Mandelbrot Visualiser" 
					,hlink:"https://github.com/adam-steven/Mandelbrot-Visualiser" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"Given a Mandelbrot generator algorithm in C++ this project involved optimising the generator using CPU multi-threading. Allowing a user to navigate the Mandelbrot diagram through a UI & GUI interface." 
					,Team:"Solo project" ,Contribution:"Optimised the Mandelbrot generator and created an OpenGL GUI."},
					
					{categorie:"Education" ,platform:"Unity C#" ,pic:"infiniteRunner.png" ,title:"Endless Runner Game" 
					,hlink:"https://github.com/adam-steven/Endless-Runner-Game" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"The oldest project in this portfolio, the objective of this was to create a game. Using Unity and C#, a score-based 3D endless runner was created with auto-generated obstacle layouts." 
					,Team:"Solo project." ,Contribution:"Developed the game (including all assets) and level generation."},
					
					{categorie:"Work" ,platform:"C# .NET Framework" ,pic:"ninewells.png" ,title:"Legacy System Adapter" 
					,hlink:"#" ,linkText:"No Link Avaliable", linkIcon:"" 
					,Overview:"Pecos is an inventory purchasing system used by this client company. Unfortunately, Pecos does not have an  inventory organisation tool leading to item duplicates being accidentally purchased. This project involved the development of a C# system that could take the data from Pecos and adapt/ modify it to then be stored in an inventory organisation tool." 
					,Team:"5 members – 4 developers and 1 systems expert." ,Contribution:"Moderated all online communication between the members and created the XML output."},
					
					{categorie:"Work" ,platform:"Website Development" ,pic:"ghj.png" ,title:"Perfume Shop Website" 
					,hlink:"#" ,linkText:"No Link Avaliable", linkIcon:"" 
					,Overview:"This was the creation of a publishable online retail store aimed at selling perfume to middle aged women in Malaysia. The site has separate customer and admin interfaces, a dynamic product filtering system, product search functionality, and processes payments via the Stripe API. Unfortunately, do to COVID-19 the client has decided to postpone online expansion for the foreseeable future." 
					,Team:"2 members – 1 developer and 1 client/designer." ,Contribution:"Developed the website via HTML, php, CSS, MySQL, and JavaScript. As well as, implementing the Stripe transaction API and configuring the web host."},

					{categorie:"Personal" ,platform:"Website Development" ,pic:"webGame.png" ,title:"Website Game" 
					,hlink:"webgame/index.html" ,linkText:"Try It Here", linkIcon:"fa-star" 
					,Overview:"This project was originally planned to be a JavaScript heavy website where the user could interact with and effect the layout of a pointless website. Through the development process however, “find the secrets” game elements were added." 
					,Team:"3 members – 1 developer, 1 site manager, and 1 idea/asset creator." ,Contribution:"Developed the website via HTML, CSS, and JavaScript."},
					
					{categorie:"Personal" ,platform:"Bash and ffmpeg" ,pic:"audioRemoverBash.png" ,title:"Bash Audio Scrubber" 
					,hlink:"https://github.com/adam-steven/Bash-Audio-Scrubber" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"An exploration into Bash shell automation. This program gathers all MP4 files from a given directoryand copies them to a new folder, with no audio." 
					,Team:"Solo project." ,Contribution:"Path selection, file gathering/ processing, and user safety verification."},
					
					{categorie:"Personal" ,platform:"Website Development" ,pic:"webPortfolio.png" ,title:"This Portfolio" 
					,hlink:"https://github.com/adam-steven/adam-steven.github.io" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"Starting from a free art portfolio template (<a href='https://www.themezy.com/free-website-templates/54-prologue-portfolio-free-responsive-template' target='_blank'> found here </a>). This project aimed to examine and enhance the portfolio template in order to demonstrate my own development skills. As the site is hosted on GitHub Pages, database and php integration is unavailable. Thus, adapting to this environment, a greater emphasis was placed on JavaScript and user interaction." 
					,Team:"Solo project." ,Contribution:"Site layout, art/ asset creation, JavaScript enhancements and CSS modifications."},
					
					{categorie:"Personal" ,platform:"Unity C#" ,pic:"ggj2018.png" ,title:"GGJ 2018" 
					,hlink:"https://globalgamejam.org/2018/games/pierat-radio" ,linkText:"GGJ Link", linkIcon:"fa-globe"  
					,Overview:"This project took place during the 2018 Global Game Jam, where in 48 hours, with a team of strangers, a game was created. This was a boat themed “survive for as long as possible” game created in Unity, C#." 
					,Team:"4 members – 2 developers and 2 artists." ,Contribution:"Added the character controller, GUI elements, item spawning, and item interaction."},
					
					{categorie:"Personal" ,platform:"Unity C#" ,pic:"ggj2019.png" ,title:"GGJ 2019" 
					,hlink:"https://github.com/giodestone/Acorn-Fling-VR" ,linkText:"Github Link", linkIcon:"fa-github" 
					,Overview:"This project took place during the 2019 Global Game Jam, where in 48 hours a game was created. Given the opportunity to develop for the Acer Mixed Reality VR headset, a VR puzzle game was created where the player must navigate between different planets to find home. " 
					,Team:"2 members – 1 developer and 1 artist." ,Contribution:"Created the 3D models, textures, animations, sky box, and world generation."}];
					
					// {categorie:"" ,platform:"" ,pic:"" ,title:"" 
					// ,hlink:"" ,linkText:"" ,linkIcon:""
					// ,Overview:"" 
					// ,Team:"" ,Contribution:""}


window.onscroll = function() {
	checkVisible();
};

function createCards(){	
	const catEduc = document.getElementById("education");
	const catPers = document.getElementById("personal");
	const catWork = document.getElementById("work");
	
	for (i = 0; i < cardDataObjs.length; i++)
	{
		var currentCard = constructCurrentCard(cardDataObjs[i]);
		
		switch(cardDataObjs[i].categorie) {
			case "Personal":
				catPers.insertAdjacentHTML("beforeend", currentCard); 
				break;
			case "Work":
				catWork.insertAdjacentHTML("beforeend", currentCard); 
				break;
			case "Education":
				catEduc.insertAdjacentHTML("beforeend", currentCard); 
				break;
			default:
				break;
		}
	}
}

function orderedcreateCard(cardsPortOrder)
{
	const catEduc = document.getElementById("education");
	const catPers = document.getElementById("personal");
	const catWork = document.getElementById("work");
	
	var cardsLeft = [];
	
	for (i = 0; i < cardDataObjs.length; i++)
	{
		var currentCardPlatform = cardDataObjs[i].platform.toUpperCase();
		
		var currentCard = null;	
			
		switch(cardsPortOrder) {
		  case "web":
			if(currentCardPlatform.includes("WEBSITE") || currentCardPlatform.includes("AWS"))
				currentCard = constructCurrentCard(cardDataObjs[i]);
			break;
		  case "game":
			if(currentCardPlatform.includes("UNITY"))
				currentCard = constructCurrentCard(cardDataObjs[i]);
			break;
		  case "app":
			if(!currentCardPlatform.includes("WEBSITE") && !currentCardPlatform.includes("UNITY"))
				currentCard = constructCurrentCard(cardDataObjs[i]);
			break;
		}
		
		if (currentCard != null)
		switch(cardDataObjs[i].categorie) {
			case "Personal":
				catPers.insertAdjacentHTML("beforeend", currentCard); 
				break;
			case "Work":
				catWork.insertAdjacentHTML("beforeend", currentCard); 
				break;
			case "Education":
				catEduc.insertAdjacentHTML("beforeend", currentCard); 
				break;
			default:
				break;
		}
		else
			cardsLeft.push(cardDataObjs[i]);
	}
	
	for (i = 0; i < cardsLeft.length; i++)
	{
		var currentCard = constructCurrentCard(cardsLeft[i]);
		
		switch(cardsLeft[i].categorie) {
			case "Personal":
				catPers.insertAdjacentHTML("beforeend", currentCard); 
				break;
			case "Work":
				catWork.insertAdjacentHTML("beforeend", currentCard); 
				break;
			case "Education":
				catEduc.insertAdjacentHTML("beforeend", currentCard); 
				break;
			default:
				break;
		}
	}
}

// <div class="card slide-card" id="TITLE">
	// <div class="card-header PLATFORM-COLOUR">
		// <b>PLATFORM</b>
	// </div>
	// <div class="card-body">
		// <div class="row">
			// <div class="col-3 imgCol">
				// <img class='slide-card-img' src="images/IMG"/>
			// </div>
			// <div class="col-9">
				// <h4 class="card-title">TITLE <a href="HYPERLINK" class="btn" target='_blank'>LINK TEXT</a></h4>
				// <p class="card-text"><b>Overview:</b> -</p>
				// <p class="card-text"><b>Team:</b> -</p>
				// <p class="card-text"><b>My Contribution:</b> -</p>
			// </div>
		// </div>
	// </div>
// </div>
function constructCurrentCard(cardData)
{
	const cardId = cardData.title.split(" ").join("");
	var card = "<div class='card slide-card' id='"+cardId+"' onclick='centerScrollToCard(\""+cardId+"\")'>";
	
	plt = colourTheProjectCard(cardData.platform);
	card += "<div class='card-header "+plt+"'><b>"+cardData.platform+"</b></div>";

		
	card += "<div class='card-body'><div class='row'>";
	
	card += "<div class='col-3 imgCol'><img class='slide-card-img' src='images/"+cardData.pic+"'/></div>";
	
	card += "<div class='col-9'><h4 class='card-title'>"+cardData.title+"&nbsp;";
	
	if (cardData.hlink != "" && cardData.hlink != "#")
		card += "<a href='"+cardData.hlink+"' class='btn btn-enabled' target='_blank'><i class='icon "+cardData.linkIcon+"'></i>"+ cardData.linkText+"</a></h4>";
	else
		card += "<a href='"+cardData.hlink+"' class='btn disabled'>"+cardData.linkText+"</a></h4>";
		
	if (cardData.Overview != "")
		card += "<p class='card-text'><b>Overview:</b> "+cardData.Overview+"</p>";
		
	if (cardData.Team != "")
		card += "<p class='card-text'><b>Team:</b> "+cardData.Team+"</p>";
		
	if (cardData.Contribution != "")
		card += "<p class='card-text'><b>My Contribution:</b> "+cardData.Contribution+"</p>";
		
	card += "</div></div></div></div>";
	
	return card;
}

function colourTheProjectCard(platform){
	
	//unity, c#, webdev, python ,other
	
	var plat = platform.toUpperCase();
	
	if(plat.includes("UNITY"))
		return "plt-unity";
	else if(plat.includes("WEBSITE"))
		return "plt-web";
	else if(plat.includes("C#"))
		return "plt-cs";
	else if(plat.includes("PYTHON"))
		return "plt-python";
	else
		return "plt-other";
	
}

//reveal the elements in the center of the screen (mainPageFunction.php)
function checkVisible()
{
	checkElementRunThough("slide-card");
	checkElementRunThough("cardSec");
}

function checkElementRunThough(className){
	const numberOfElements = document.getElementsByClassName(className).length;
	var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	var dist = viewHeight / 3;
	
	for (i = 0; i < numberOfElements; i++) 
	{
		var currentView = document.getElementsByClassName(className)[i];

		var rect = currentView.getBoundingClientRect();
		var above = rect.bottom < 0; //rect.bottom - dist < 0; to only display the center card
		var below = rect.top - viewHeight + dist >= 0;
		
		if(!above && !below)
		{
			if (currentView.style.left > "5%")
				moveElem(className, i, 0);
				
			if (currentView.classList.contains("charityCardSec"))
				editCharityCardSec(currentView, true);
			else if (currentView.classList.contains("socialCardSec"))
				editSocialCardSec(currentView, true);
			else if (currentView.classList.contains("hobbiesCardSec"))
				editHobbiesCardSec(true);
		}
		else
		{
			if (currentView.style.left < "75%")	
				moveElem(className, i, 80);
				
			if (currentView.classList.contains("charityCardSec") && currentView.getElementsByClassName("card")[0].classList.contains("show-me"))
				editCharityCardSec(currentView, false);
			else if (currentView.classList.contains("socialCardSec") && currentView.getElementsByClassName("carousel")[0].classList.contains("show-me"))
				editSocialCardSec(currentView, false);
			else if (currentView.classList.contains("hobbiesCardSec"))
				editHobbiesCardSec(false);
			
		}
	}
}

function moveElem(className, i, val) {
	$("."+className+":eq("+i+")").stop(true).animate({left: val+'%'}, 100, 'linear');
}

function editCharityCardSec(currentView, display){
	const numberOfTargetDivs = currentView.getElementsByClassName("card").length;
	
	for  (j = 0; j < numberOfTargetDivs; j++) 
	{
		var currentTargetDiv = currentView.getElementsByClassName("card")[j];
		if (display)
			currentTargetDiv.classList.add("show-me");
		else
			currentTargetDiv.classList.remove("show-me");
	}
}

function editSocialCardSec(currentView, display)
{
		const currentTargetDiv = currentView.getElementsByClassName("carousel")[0];
		if (currentTargetDiv)
		{
			if (display)
				currentTargetDiv.classList.add("show-me");
			else
				currentTargetDiv.classList.remove("show-me");
		}
}

function editHobbiesCardSec(display)
{
	const numberOfTargetDivs = document.getElementsByClassName("hobbies-card").length;
	
	for  (j = 0; j < numberOfTargetDivs; j++) 
	{
		if (display)
			$(".hobbies-card:eq("+j+")").stop(true).animate({left: '0%'}, (j+1) * 150, 'linear');
		else
			$(".hobbies-card:eq("+j+")").stop(true).animate({left: '90%'}, (j+1) * 150, 'linear');
	}
}

function changeCardOrder(toPlaceFirst){
	document.querySelectorAll('.slide-card').forEach(function(a){
		a.remove()
	});
	
	orderedcreateCard(toPlaceFirst);
}

function scrollToSection(thisCard) {
	if(thisCard.style.left == '80%')
		$('html,body').animate({ scrollTop: $(thisCard).offset().top}, 'slow');
}

function centerScrollToCard(cardID)
{
	const element = document.getElementById(cardID);
	const elementRect = element.getBoundingClientRect();
	const absoluteElementTop = elementRect.top + window.pageYOffset;
	const middle = absoluteElementTop - (window.innerHeight / 4);
	window.scrollTo({top: middle, behavior: 'smooth'});
}