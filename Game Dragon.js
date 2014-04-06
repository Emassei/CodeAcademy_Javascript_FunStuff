//New Game


//By multiplying the random number (which is between 0 and 1) by 5, we make it a random number between 0 and 5 (for example, 3.1841). Math.floor() rounds this number down to a whole number, and adding 1 at the end changes the range from between 0 and 4 to between 1 and 5 (up to and including 5).//


var slaying = true;
var youHit = Math.floor(Math.random());
var damageThisRound = Math.floor(Math.random() *5 + 1);

while(slaying){
    if(youHit===1){
        Console.log("Nice shot Guy!");
        totalDamage = totaldamage += damageThisRound;
    if(totalDamage>=4){
        console.log("You slew him gooood!");
        slaying = false;
    }
    else{
        youHit = Math.floor(Math.randon());
    }
    }
    else{
        console.log("You loose, way to go!");
    }
    slaying=false;
}
