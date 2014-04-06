//The Switch statement

switch(answer) {
  case 'anger':
    console.log("Pride makes the world great!");
    break;
  case'sadness':
    console.log("Didn't Shakespeare teach you anything?");
    break;
  case'happiness':
    console.log("You're fake!");
    break;
  default:
    console.log("Go away! Robot!");
}

//Syntax seems pretty straight forward! Don't forget the colons!


//------------------------------------------------------------------
// Logical operators


//&& = and

var eat = function() {
    if(hungry&&foodHere){
        return true;
    }
    else{
        return false;
    }
};

//This only works if both variables are true.


//------------------------------------------------------
//       || = or


var tired = true;
var bored = false;

var nap = function() {
  if(tired || bored){
      return true;
  }
  else{
      return false;
  }
  
};

//This works if one of the variables are true. 

//----------------------------------------------------------------

//             ! = not

var happy = function() {
 if(!programming){
     return true;
 }
 else{
     return false;
 }
  
};



