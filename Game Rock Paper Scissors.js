
//This is rock paper scissor. 



var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice < 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function(userChoice,computerChoice) {
    if(choice1 === choice2){
    return ("The result is a tie!");
}
    if(choice1==="rock"){
        if(choice2==="scissors")
        return"rock wins";
    else{
        return"paper wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="paper")
        return"scissors wins";
    else{
        return"rock wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock")
        return"paper wins";
    else{
        return"scissors wins";
        }
    }

};
//------------------------------------------------------------------------------
//This is a for loop, this will run set by the condition.

for(i=0;i<3;i++){
	console.log("How is you hair?");
}
//-----------------------------------------------------------------------------
//This is a while loop, it will run until it is false. False = 0 
var start = 1
while(start){
	console.log("How is my hair?");
	start = 0
}

//---------------------------------------------------------------------------------------
//This is a loop that will run once, after that it will run while until it comes up as false

var getToDaChoppa = function(){
    do{
        console.log("This thing");
    }
    while(false);
};

getToDaChoppa();


