//If else statements

var isEven = function(number) {
  if (number % 2===0){
      return true;
  }
  else {
      return false;
  }
  
};

//This type of opertator to see if something is divisible by two 
//variable % 2 === 0


//-----------------------------------------------------------------
//is NaN, if this is called a string that contains a number, then 
// it will convert it into a number "23" = 23, not the string "23".

var isEven = function(number) {
  if (number % 2===0){
      return true;
  }
  else if (isNaN(number)){
      return "Not a numba";
  }
  else {
      return false;
  }
};

//This is syntax for NaN operations, these can be placed into
//conditionals.

else if (isNaN(number)){
      return "Not a numba";
  }
