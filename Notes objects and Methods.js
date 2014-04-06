
for(var i=1;i<=20;i++){
    if((i%3===0) && (i%5===0)) {
    console.log("FizzBuzz");
    } 
    
    else if(i%5===0) {
    console.log("Buzz");
    } 

    else if(i%3===0) {
    console.log("Fizz");
    } 

    else {
    console.log(i);
    }
}

//1. we create an array with a ton of numbers 1-20

//2. we crate a loop, that starts at 1, and does not exceed 20, and concatenates. 

//3. if the number i is divisible by 3, (This was a hard part, i%3===0 is a logical operator, dont take 0 to be false, rather this is good way of figuring out of things are divisible by certain numbers. 

//if (var%5===0) things that are divisible by 5

// replace any of the numbers with something and there you go. 


//Switch and functions. 
var getReview = function (movie) {
 switch(movie){
    case "Toy Story 2":
        return"Great Story. Mean Prospector";
    case "Finding Nemo":
        return"Cool animation and funny turtles";
    case "The Lion King":
        return"Great Songs";
    default: 
    return "I don't know";
    }
};

getReview("Toy Story 2");


//-----------------------------Objects!!------------------------------
//always separate the properties with commas = ,

var me = {
    age: 23,
    country: "Colombia"
};


// Let's review what we previously covered. Each piece of information we include in an object is known as a property. Think of a property like a category label that belongs to some object. When creating an object, each property has a name, followed by : and then the value of that property. For example, if we want Bob's object to show he is 34, we'd type in age: 34.

// age is the property, and 34 is the value of this property. When we have more than one property, they are separated by commas. The last property does not end with a comma.

// Instructions
// See the console for the object I have created about myself. Can you create an object called me that describes your age and which country you live in?


//------------------------------------------------------------------

// we also use something called dot notation, 

//ObjectName.PropertyName

//----------------------------------

//Also.. we can use something called bracket notation
//ObjectName["PropertyName"], we always need quotes around them. 

//-----------------------

//creating new objects

//We use object literal notation, creating objects {} and defining properties within the brackets. 

//Literal notation 

var susan1 = {
  name: "Susan Jordan",
  age: 24
};






//Also.................. we can create new objects without the {} brackets. 

// for this we use the keyword new. This is know as creating an object using a constructor. 

// First you define a variable then you make it equal to new and then object followed by (), i.e. var objectName = new Object();

// constructor notation

var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

//----------------------------------------------------------------

//dot.Notational
var BMW = new Object();

BMW.cost = "too much";
BMW.speed = 220;
BMW.country ="Germany";


//Object Literal notation!
var BMW = {
    cost: "too much",
    speed: 220,
    country: "Germany"
};

//---------------------------Methods-----------------------------

//IMPORTANT:

//We can think of properties as variables associated with an object. Similarly, a method is just like a function associated with an object.

//--------------------------.this-----------------------------------


// here we define our method using "this", before we even introduce bob

var bob = new Object();
bob.age = 30;

var setAge = function (newAge) {
  this.age = newAge;
};

bob.setAge = setAge;

bob.setAge(50);

//with this, we have to make bob.setAge = setAge;
//we have to create a new variable, bob.setAge and reference it back to the setAge function.



//--------------------------------------------------------------------

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;


rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};


rectangle.setWidth = function(newWidth){
    this.width = newWidth;
};
  

rectangle.setHeight(6);
rectangle.setWidth(8);

//But with this one we did not have to create a new variable 


//---------------------------------Object constructor-------------


//When we write bob = new Object( ); we are using a built-in constructor called Object. This constructor is already defined by the JavaScript language and just makes an object with no properties or methods.

function Dog(age, color, breed){
    this.age = age;
    this.color = color;
    this.breed = breed;
}

//This is great because we can pass whatever values we want into the function Dog and set it within those perimeters. 


//-----------------------Object constructor--------------------

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles",39);
var holden = new Person("Holden Caulfield",16);

console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);

// here we make use of the function person, as a constructor, we can create new variables and let the function create the new parameters. 

//----------------------------------------------------------------

function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  this.calcPerimeter = function(){
      return (this.height * 2) + (this.width *2);  
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea(2,3);
var perimeter = rex.calcPerimeter(3,4);

//here we can create different functions inside of the constructor, and let whatever variable make use of the new methods! 

//-----------------------------------------------------------------

//All of these make use of the constructor

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");



//-----------------------------------------------------------------
//---------------------Making arrays of objects!----------------
//We can also create an constructor and place the new items in an array!

function Person (name, age) {
    this.name = name;
    this.age = age;
}


var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy",6);



//--------------------------------------------------------------------

function person(name, age){
    this.name = name;
    this.age = age;
}


var family = new Array();


family[0] = new person("alice", 40);
family[1] = new person("bob", 42);
family[2] = new person("michelle", 8);
family[3] = new person("timmy", 6);

for(i=0;i<family.length; i++){
    console.log(family[i].name);
}

//All of this is good, but the loop is what may be tricky. You create the standard loop array cycle, but to display the names of each person we have to make sure that we place the [i] in the dot notation name. 

// console.log(family[i].name); 

//the dot notation is easy to see, but console must be directed to the variable i. 

//------------------------------------------------------------------

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

// we can also create a new function, that takes two perimeters and returns a value. 

//------------------------------------------------------------------
// First code without error 
function Person (name, age) {
    this.name = name;
    this.age = age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

var olderAge = function(person1, person2){
    if(person1.age>person2.age){
        return person1.age;
    }
    else if(person1.age<person2.age){
        return person2.age;
    }
    else{
        return person1.age;
    }
}; 


//----------------------------Properties-----=-=-=---==-=--==-=-=-=-

var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;

// dot notation 
var species = snoopy.species;

//bracket notation 
var age = snoopy["age"];


// Making our own constructors

var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";




function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// With this we can create new objects simply thought the constructor. no more do we have to define new Objects and create properties within them as in the prior example we can just do this.

var the_hobbit = new Book(320, "J.R.R. Tolkien");


//--------------------------------------------------------------------

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    this.perimeter = function(){
        return Math.PI *this.radius * 2;
    };
}



// A NEW INSIGHT INTO FUNCTIONS 

//a function can be any formula we want to create. 




var bob = {
firstName: "Bob",
lastName: "Jones",
phoneNumber: "(650) 777-7777",
email: "bob.jones@example.com"
};

var mary = {
firstName: "Mary",
lastName: "Johnson",
phoneNumber: "(650) 888-8888",
email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
console.log(person.firstName + " " + person.lastName);
}

var list = function(){
    var contactsLength = contacts.length;
    for(var i=0; i<contacts.length; i++){
        printPerson (contacts[i]);
    }
};


// Create a function called list that does not take any parameters.
// At the start of the function, define a variable to store the number of items in the contacts array. Call it contactsLength.
// All of the items in an array are numbered, starting at 0. To cycle through all of the elements of the array, create a for loop that cycles from 0 up to one less than the number of items in the contacts array.
// Inside of the loop, add code to call printPerson, passing in the element of the array that the loop is currently at.
// At the very bottom of the file, call the list function. The list function should then loop through every member of the array we pass it and print its information.


// This search function can be used either way.

var search = function(lastName){
    var contactsLength = contacts.length;
    for(var i = 0; i < contacts.length; i++){
        if(lastName === mary.lastName){
        printPerson(contacts[i]);
        }
        else if(lastName === bob.lastName){
            printPerson(contacts[i]);
        }
    }
};


//This code is more efficient, through the use of the contacts array it is much easier to write simple effective code. 

function search(lastName){
	var contactsLength = contacts.length;
	for(i=0;i < contactsLength; i++){
		if (lastName === contacts[i].lastName){
		printPerson(contacts[i]);
		} 		
		else { return "Not found";}
	};
};

//-------------------------------------------------------------------


var james = {
    job: "programmer",
    married: false,
    sayJob: function(job) {
        console.log("Hi, I work as a " + this.job);
    }
};

// if you want to add a function / method to console.log then place the job opertator outside of the quotes. 


//------------------------------------------------------------------

//accessing a the properties of a variable 
var james = {
    job: "programmer",
    married: false
};

var aProperty = "job";

console.log(james[aProperty]);

// we are accessing the property job by the object james by defining a variable aProperty to "job" and then running the console to the object james and letting the string "job" of variable aProperty print out the string "programmer". 

//--------------------------------------------------------------------


// typeof operator

var anObj = { 
    job: "I'm an object!" 
};

var aNumber = 42;

var aString = "I'm a string!";

console.log( typeof anObj) ;
console.log( typeof aNumber );
console.log( typeof aString );

// The typeof operator assess the object and returns the data type, string, number, boolean, array, object, null, undefined. 


//-----------------------------------------------------------------
// hasOwnProperty operator

var myObj = {
    name: "taylor",
    
};


console.log( myObj.hasOwnProperty('name') );
console.log( myObj.hasOwnProperty('nickname') );
//This operator inspects the objects properties, and gives a boolean answer, 'true' or 'false' as to whether the objects possess that property.  

//-------------------------------------------------------------------




//--------------------------------------------------------------------

//This example shows us how to print out all of the properties for any given object. By creating a loop and and assigning a variable property to look inside of the object nyc, we then print out that particular variable in the body of the loop. 

var nyc = {
    fullName: "New York City",
    mayor: "Michael Bloomberg",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc){
    console.log(property);
}

//--------------------------------------------------------------------
//Dont forget this, between dot and bracket notation, we can also access 


var dog = {
species: "bulldog",
age: 3,
color: brown
};


//Dot notation = bracket notation = the value of the property 
dog.species = dog["species"] = "bulldog";



var x = "species";
//we make var x = "species", the property with a value inside of the object dog


dog[x] = "bulldog";
//then when we call the object dog and place the variable x inside of brackets, we get the species. We see that by assigning the property name to a variable, we can then use the variable name in bracket notation to get the property's value.

//---------------------------------------------------------------------



var nyc = {
    fullName: "New York City",
    mayor: "Michael Bloomberg",
    population: 8000000,
    boroughs: 5
};


for(var a in nyc){
    console.log(nyc[a]);
}

//here we define a variable within the loop, and it automatically goes through the object, finds the properties and prints out all of the values.

//--------------------------------------------------------------------





