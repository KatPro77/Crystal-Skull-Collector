$(document).ready(function () {


    // create variables & set to 0
    var score = 0;      //user;s score
    var random = 0;     //number to match
    var wins = 0;
    var loss = 0;
    
    // $("#wins").text(wins);
    // $("#loss").text(losses);
    var skullValue = ["assets/images/Red skull.png", "assets/images/blue skull.png", "assets/images/yellow skull.png", "assets/images/green skull.png"];

    // var red = 0;
    // var blue = 0;
    // var yellow = 0;
    // var green = 0;
    
    // create random numbers for each skull (1-12) and random number to match
    
    function selectNumbers () {
   
    red = Math.floor(Math.random()*13);
    blue = Math.floor(Math.random()*13);
    yellow = Math.floor(Math.random()*13);
    blue = Math.floor(Math.random()*13);

    // create the random target number, 19 - 120
	random = Math.floor(Math.random() * 102) + 19;
        $("#targetNumber").html(random);
        
        console.log("targetNumber" + random);
    

    score = 0;
        $("#totalPoints").text(score);

    console.log(red);
    console.log(blue);
    console.log(yellow);
    console.log(green);
    console.log(random);

};
    selectNumbers();

});

// 2) 

// 3) display wins/losses and total score
//         - CREATE FUNCTION / use IDs for HTML  - (get ElementByID????)

// 4) display random number
//         - CREATE FUNCTION 

// 5) CREATE FUNCTION for reset the game
//         function reset()



// 7) create IF and ELSE statements:

//         if Wins (total score) = random number
//             (create  winning alert)

//         if Loss > random number
//             (create decorative loss alert) - GAME OVER

//       use RESET funvtion

// REPEAT THIS FO ALL THE GEMS!! / or use # for all of them?? - check the hangman game

// 8) create on key/click event 

// -->