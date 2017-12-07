 // make an array for the letter choices
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
     //var win = document.getElementById("result-win");
     //var loss = document.getElementById("result-loss");
 
     var winCount = 0;
     var lossCount = 0;
     var myGuess = 10;
     var myChoices = [];
 
     function computerLetter() {
         var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         console.log("first comp guess is: " + computerGuess);
         return computerGuess;
     }
 
     function reset(){
         myChoices = [];
         document.querySelector("#myChoices").innerHTML = myChoices;
         myGuess = 10;
         document.querySelector("#guesses").innerHTML = myGuess;
         computerGuess;
         var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         console.log("first comp guess is: " + computerGuess);
         return computerGuess;
     }
 
     computerGuess = computerLetter();
     // This function is to detect when a user touches a key
     document.onkeyup = function(event) {
       // finds the key that was pressed
         var userInput = event.key;
         if (userInput == computerGuess){
             winCount++;
             document.querySelector("#result-win").innerHTML = winCount;
             computerGuess = reset();
         }
 
         else{
             if (myGuess > 1){
                 myGuess--;
                 document.querySelector("#guesses").innerHTML = myGuess;
                 myChoices.push(userInput);
                 console.log(myChoices);
                 document.querySelector("#myChoices").innerHTML = myChoices;
             }
 
             else{
                 lossCount++;
                 document.querySelector("#result-loss").innerHTML = lossCount;
                 computerGuess = reset();
             }
         }
     }
       