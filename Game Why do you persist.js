var user = prompt("Why do you persist, Anger, Love, or Empathy?").toUpperCase();

switch(user){
    case "ANGER":
        var proud = prompt("Let your anger kindle your hate, are your proud?").toUpperCase();
        var impious = prompt("Are you without the favor of the gods?").toUpperCase;
        if(proud === "YES" && impious ==="YES" ){
            alert("Let Amour-propre bind you to the opinions of others.");
        }
        else{
            alert("You have no light in your eyes!");
        }
        break;
        
        
        
    case "LOVE":
        var others = prompt("Where do you find nourishment, in others?").toUpperCase();
        var kinship = prompt("Is it in the stars?").toUpperCase();
        if(others === "YES" || kinship === "YES"){
            alert("Truly, you are blessed");
        }
        else{
            alert("Wander till you can bear it no more.");
        }
        break;
        
        
    case "EMPATHY":
        var courage = prompt("Have your gods taught you well?").toUpperCase();
        var measure = prompt("Do you find these to be perilous times?").toUpperCase();
        if(courage === "YES" && measure === "YES"){
            alert("Let the Spirits comfort you!");
        }
        else{
            alert("Let your labor comfort you!");
        }
        break;
        
        
    default:
        alert("Why do you persist?");
}





