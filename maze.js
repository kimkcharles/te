window.onload = function() {

	//This is for if the boundary is touched
	var touched=false;
	//This is for if the status message has been presented
	var stat=false;
	var statmess=document.getElementById("status");
	var startMaze=false;
	//var touchwalls= document.querySelectorAll(".youlose")


	//Excercise 1
	/*
	let wall= document.getElementById("boundary1");
	wall.addEventListener("mouseover", function() {
		if (startMaze==true && stat==false){
	 		this.classList.add("youlose");
	 		stat=true;
			statmess.innerHTML="You Lose!"; //Exercise 5
			touched=true;
	 	}
	});
	*/

		
	//Excercise 2
	
	let walls= document.querySelectorAll(".boundary:not(.example)");

	
	for (let w=0; w<walls.length; w++){
		walls[w].addEventListener("mouseover", function(){
			if (startMaze==true && stat==false){
				stat=true;
				statmess.innerHTML="You Lose!"; //Exercise 5
				touched=true;

				for (a=0; a<walls.length ; a++){
					walls[a].classList.add("youlose");
				}
			}
		})
	}


	//Excercise 3
	let ended = document.getElementById("end");
	ended.addEventListener("mouseover", function(){
		if (touched==false && stat==false && startMaze==true){
				statmess.innerHTML="You Win!"; //Exercise 5
				stat=true;
				//alert("You Win!");
		}
	});


	//Excercise 4

	let begin =document.getElementById("start");
	begin.addEventListener("click", function(){
		//alert("Lets start!!");
		stat=false;
		startMaze=true;
		touched=false;

		if (document.querySelectorAll(".youlose").length!=0){
			walls.forEach(function(e){
				e.classList.remove("youlose");
			})
		}
	});

		
	//Excercise 6
	
	var original= 'Move your mouse over the "S" to begin.';
	begin.addEventListener("mouseover", function(){
		if(document.querySelectorAll(".youlose").length==0 && statmess.innerHTML==original){
			startMaze=true;
			stat=false;
			touched=false;			
		}
	});

	var maze= document.getElementById("maze");
	begin.addEventListener("mouseout", function(){
		
		maze.addEventListener("mouseleave", function(){
			
			if (startMaze==true && stat==false && touched==false){
				statmess.innerHTML="You Lose!";
				for (a=0; a<walls.length ; a++){
					walls[a].classList.add("youlose");
				}
				stat=true;
				touched=true;
			}
		});
	});


	


}