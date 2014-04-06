//----------------javaScript2------------------------
//------------------FUNCTIONS!!!!!---------------------


//---------------First Function-------------------------

// function sayHello (greeting, name) {
	// if (typeof greeting ==='undefined'){
		// greeting = 'Guten tag';
	// }
	// if(typeof name ==='undefined'){
		// name = 'frederic'
	// }
	// console.log(greeting + " World! " + name);

// }


// sayHello("hola","jim");
// sayHello();


//----------------------Return Value-----------------------


// function sayHello (name, greeting) {
	// if (typeof name === 'undefined'){
		// return 0;
	// }
	// if (typeof greeting ==='undefined'){
		// greeting = 'Guten tag';
	// }
	// console.log(greeting + " World! " + name);
	// return name.length;
	// console.log('End of Function');
	// if (typeof array ==='string'){
            // return 0;
            // }
        // if (typeof array ==='number'){
            // return 0;
            // }
	// return sayHello.length;
	
// }
// console.log(sayHello("Jim", "halo"));

// console.log(sayHello("James", "greeting"));
// console.log(sayHello());


//-----------------------------Scope---------------------
//a name space for variables
// shadowing variable: giving the same name for a local variable
// that a global variable has!


// var color = 'black';
// var number = 1;


// function showColor (){
	// var color = 'green';
	// var shape = 'square';
	
	// number = 2;
	
	// console.log('showColor color', color);
	// console.log('inside', number);
	// console.log('inside', shape);
// }

// showColor();

// console.log('Global color', color);
// console.log('outside', number);
// console.log('outside', shape);

// if var is not used inside the local scope then
// the particular variable is made global



//----------------------------------------------------
//--------------Anonymous Functions--------------------



//this creates a variable called myFunction, almost
//indistinguishable from the other syntax

// var myFunction = function(){
	// console.log('myFunction was called');
// }

// var callTwice = function(targetFunction){
	// targetFunction();
	// targetFunction();
// }

// callTwice(function () {
	// console.log ("Hello From Anon");
// });

//Why is this useful?
//This helps with deBugging, it lets the browser associate a name
//with the place where the error occurred 

//---------------------Self Executing---------------------

// (function() {
	// var a, b, c;
	// var Plus = (a+b);
// })(1, "hello")


//----------------------Examples---------------------------
//DOM interface with the elements on the page

// var button = document.getElementById('action');
// var input = document.getElementById('text_field');
// var button2 = document.getElementById('pass');


// button.addEventListener('click', function(){
	// console.log('clicked');
	// console.log('Other Clicker');
	// input.setAttribute('value', 'Hello World');
// });



// button2.onclick = function(){
 // console.log('Ouch!');
// }

//----------------------Basic Objects--------------------
// {"key":"value"}


// var Ernie = { 
	// name: "Ernie", 
	// Height:"5'10", 
	// Skills: ["beat your ass", "steal your bitches", "create matter"],
	// "favorite color": "green"
// };

// console.log(Ernie.name);
// console.log(Ernie["favorite color"]);


//---------------------------Methods--------------------------
// a property of an object
//(((((((((((((((((((((((THIS))))))))))))))))))))))))))))))
// var Ernie = { 
	// name: "Ernie", 
	// Height:"5'10", 
	// Skills: ["beat your ass", "steal your bitches", "create matter"],
	// "favorite color": "green",
	// greet: function (name, mood){
	// name = name || "Guy";
	// mood = mood || "good";
	
		// console.log("Yo!, " + name +
					// " my name is " + this.name +
					// " and I here to fuck you in a " + mood + " mood!");
	// }
// };


//-------------------------------------------------------
// Ernie.greet();

// var Nick = { 
	// name: "Nick", 
	// greet: Ernie.greet
// };

// Nick.greet();

// var ErnieGreet = Ernie.greet;
// ErnieGreet.call({name: "Emmit"},"Stanley", "bad");

// Ernie.greet.call(Nick);
// Ernie.greet("Master","Johnson");

//-------------------------apply, put as an array-----------------------
// Ernie.greet.apply(Nick, ["mathins","Gimpy"]);
// Ernie["greet"]("steven","mornful");
// Ernie.greet("Charles", "Gitty");

// var args = ["Michael","Happy"];
// Ernie.greet.apply(Ernie, args);



// function grey(Color, height){
	
// }


//----------------------Prototypes---------------------------------

var personPrototype = {
	name: 'anonymous',
	greet: function (name, mood){
	name = name || "Guy";
	mood = mood || "good";
	
		console.log("Yo!, " + name +
					" my name is " + this.name +
					" and I here to fuck you in a " + mood + " mood!");
	},
	
	species: "Homo Sapien",
}

//-----------------Constructor Function-------------------
//-------------------Lead with capital letter--------



function Person (name){
	this.name = name;
}

Person.prototype = personPrototype;

jim = new Person ("Jim");
nick = new Person ("Nick","bad");



































