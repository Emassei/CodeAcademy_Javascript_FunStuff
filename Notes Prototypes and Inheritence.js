//--------------------Object Oriented Programming----------------

function Person(name,age) {
  this.name = name;
  this.age = age;
}


var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

//When you make a constructor, you are in fact defining a new class. A class can be thought of as a type, or a category of objects—kind of like how Number and String are types in JavaScript.

//This is big, when you make a constructor you are making a new class!!! Just like strings, just like numbers, all of it!


//----------------------------------------Prototypes!!!-----------

function Dog (breed) {
  this.breed = breed;
};

Dog.prototype.bark = function() {
  console.log("Woof");
};


var buddy = new Dog("golden Retriever");
buddy.bark();

var snoopy = new Dog("Beagle");
snoopy.bark();

//Now with any new object dog created, when the method .bark is called, it will automatically be assigned to that object, and if ran will incorporate it as a new property of that object.  

//This is a class!
function Animal(name, numLegs){
    this.name = name;
    this.numLegs = numLegs;
}

//Method created
Animal.prototype.sayName = function(){
    console.log("Hi my name is " + this.name);
};

var penguin = new Animal("Captain Cook", 2);
penguin.sayName();

//------------------------------------------------------------------
//------------------Inheritance-------------------

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin(name){
    this.numLegs = 2;
    this.name = name;
}

Penguin.prototype = new Animal();

//by making the penguin.prototype = new Animal(), penguin will now inherit the properties from the animal constructor, but while the penguin constructor still maintains the property that it should have 2 legs. 


//----------------More Inheritance---------------------------------

function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}


Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};



function Penguin(name){
    this.name = name;
    this.numLegs = 2;
}

Penguin.prototype = new Animal();

var penguin = new Penguin("Thomas");

penguin.sayName();


//when penguin.prototype = new Animal(); not only does the var penguin inherit this.name and num.legs from the animal constructor it also inherits the 

//animal.prototype.sayname = function(){
//	console.log("hi my name is " + this.name);
//};

//------------------------More Inheritance-------------------------

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}


function Emperor(name){
    this.name = name;
}


Emperor.prototype = new Penguin();

var emperor = new Emperor("Frank");

console.log(emperor.numLegs);


//now we see that the emperor inherits the numLegs from the penguin constructor by the emperor.prototype = new Penguin(); 


//-----------------------------------------------------------------
//Between private variables and public, or world variables. 

//In the function, a variable bankBalance is established, but it is only accessible inside of the function, also a private method is established by the variable too, both are private variables!

//So now we are going to access the variable and the method through a global method. 

//this.askTeller = function(){
//	return returnBalance;
//};

//Through this global method we 'link' back to the private returnBalance function and then to the private variable. 
  
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   this.askTeller = function(){
	  return reutrnBalance;
   };   
}

var john = new Person('John','Smith',30);

console.log(john.returnBalance);

var myBalanceMethod = john.askTeller();

var myBalance = myBalanceMethod();

console.log(myBalance);

//-------------------------------------------------------------------
//---------------Creating a loop that checks the typeof----------

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for(var prop in languages){
    var check = languages[prop];
    if(typeof check === "string"){
        console.log(languages[prop]);
    }
}


// so we created a loop that check the properties in the object languages

//new created a variable check that is equal to languages[prop]

//we have to create a new variable because the syntax of the the loop cannot take the languages[prop] line.

//then we create the if statement where it checks to see if the typeof check, which is equal to the properties in language, is a string. If it is it returns the property of the languages that are.

//-------------------------------------------------------------------

//This is simply adding a prototype to the dog object



function Dog (breed) {
    this.breed = breed;
   
}

 Dog.prototype.sayHello = function(){
    console.log("Hello this is a " + this.breed +" dog");
    };


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

//--------------------------------------------------------------------
//This is the syntax for finding the type of an object.prototype, object always exists, and this shows us the the type of its prototype. 


var prototypeType = typeof Object.prototype;
console.log(prototypeType);


var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);

//
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);

var myBalance = john.askTeller(1234);

//--------------------------------------------------------------------
//This is how you call a global method, by creating a variable making it equal to the new person and calling the method. 
//var myBalance = john.askTeller(1234);

//In this example the if statement checks to see if the object suitcase has a property shorts, since it didn't it created the property shorts and assigned it the string "booty".

var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty('shorts')=== true){
    console.log(suitcase.shorts);
}
else{
    suitcase.shorts = "booty";
}

//--------------------------------------------------------------

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());

