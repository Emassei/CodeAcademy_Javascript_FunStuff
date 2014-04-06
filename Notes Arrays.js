//javaScript


//Arrays

// var x = ["some", "extra", "words", "here"];
// console.log(x.length);

// var y = ["a string", 3, ["a sub array", 12, 34, "tomato"], "house", function(a,b){return a+b}];

// var z =[];

// other way to create arrays
// this allows the length to be set according to the number.

// var a = new Array(50);

// var my_array = ["hello", 42, true, function (a) {return a*2}];
//index how far from the beginning of the array an element is.

// var word = my_array[0];
// var answer = my_array[1];
// var doubler = my_array[3];

// var giant = function (a,b,c){return a+1+c};

// console.log(doubler(10));

// my_array[1] = 144;
// var new_answer = my_array[1];

// my_array[my_array.length] = "a new String";
// my_array[my_array.length] = "a new String";
// my_array[my_array.length] = "a new String";


// Methods, push and pop

// var my_array = [2, 3, 4];
// console.log(my_array.toString());

// my_array.push(5);
// console.log(my_array.toString());

// var value = my_array.pop();
// console.log(my_array.toString());
// var value2 = my_array.pop();
// console.log(my_array.toString());


//Shift and unshift

// var my_array = [2,3,4];
// console.log(my_array.toString());


// un-shift adds a value to the beginning.
// my_array.unshift(1);
// console.log(my_array.toString());


// shift takes the beginning value away.
// var value = my_array.shift();
// console.log(my_array.toString());

// var value = my_array.shift();
// console.log(my_array.toString());

// var value = my_array.shift();
// console.log(my_array.toString());


// var value = my_array.shift();
// console.log(my_array.toString());


// var my_array = [10, 44, 32, 100, 0 ,44, 3, 4];
// console.log(my_array.toString());

// these two functions allow for there to be a numeric order
// or a random order
// my_array.sort(function (a, b){
	// return a - b;
	// return Math.random() - 0.5
// });

// you can also sort items by their string size

// my_array.sort(function (a,b){
	//return a.length - b.length;
//})
// console.log(my_array.toString());


// This is the reverse method
// var my_array =[1, 2, 3, 4, 5];
// console.log(my_array.toString());

// my_array.reverse();
// console.log(my_array.toString());


// more method arrays
// concatenate
// var x = [1,2,3];
// var y = [4,5,6];

// when you place an array into the argument, it will take them
// out of the array and place them into the argument

// var z = x.concat(4,5,6,7,8,[9, 10, "potato", 11]);

// console.log(x);
// console.log(y);
// console.log(z);

//myArray.slice: this returns a NEW array based on the array from 
//index start to index end!

// var my_array = [0,1,2,3,4,5];
// var result = my_array.slice(0, 60);

// console.log(result);

// join method, myArray.join(separator)
// Returns a string with all values in array joined with the
// string separator

// var words =[function(a) {return a}, false, "these" , "things", "teach", "us", "wisdom", "1,2",3, true];
// var result = words.join(" ")


//Splice methods!

var my_array = [0,1,2,3,4,5,6];

console.log(my_array.toString());

// the first number is the index, the second is the length!
// this takes something out!
my_array.splice(4,1);
console.log(my_array.toString());

//---------------------------------------------------------

// this adds things! 2=index, 0=the length of what you want
// to take out, and the last value is what you want put in!

var my_array1 = [0,1,2,3,4,5,6];

my_array1.splice(2,0,'two');

console.log(my_array1.toString());

//----------------------------------------------------------
//This is how you replace things

var my_array2 = [0,1,2,3,4,5,6];

my_array2.splice(2,1,'two','TWO', 'tomato'); // this allows multiple 
//elements to be placed into the array

// this can be the same as: my_array2[2] = 'two'
console.log(my_array2.toString());






















