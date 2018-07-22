$(document).ready(function () {


    // create variables & set to 0
    
      
   
    var wins = 0;
    var loss = 0;
    $("#wins").text("Wins" + wins);
    $("#loss").text("Lossess" + loss);


    // create the random number to match, 19 - 120
    random = Math.floor(Math.random() * 102) + 19;

    console.log("#random" + random);


//     function gameStart () {
//     alert("Let's Play!");
// }

//     gameStart();

    function newNumbers() {
        $("#randomNumber").html("random");
        return false;
    }

    newNumbers();

    // random numbers for each skull (1-12) 
    var red = Math.floor(Math.random()*12) + 1;
    var blue = Math.floor(Math.random()*12) + 1;
    var yellow = Math.floor(Math.random()*12) + 1;
    var green = Math.floor(Math.random()*12) + 1;
    
    console.log(red);
    console.log(blue);
    console.log(yellow);
    console.log(green);
    console.log(random);


    var score = 0;

    $("#red").on("click", function() {
        score = score + parseInt(red);
        $("#totalNumber").text(score);


        if (score === random) {
            wins++;
            $("#wins").text("wins  " + win);
            alert("YOU WIN!!!");

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);

        } else if (score > random) {

            loss++;
            $("#loss").text("loss  " + loss);
            alert("GAME OVER!!!")

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);
        }



    });

    $("#blue").on("click", function() {
        score = score + parseInt(blue);
        $("#totalNumber").text(score);


        if (score === random) {
            wins++;
            $("#wins").text("wins  " + win);
            alert("YOU WIN!!!");

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);

        } else if (score > random) {

            loss++;
            $("#loss").text("loss  " + loss);
            alert("GAME OVER!!!")

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);
        }



    });

    $("#yellow").on("click", function() {
        score = score + parseInt(yellow);
        $("#totalNumber").text(score);


        if (score === random) {
            wins++;
            $("#wins").text("wins  " + win);
            alert("YOU WIN!!!");

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);

        } else if (score > random) {

            loss++;
            $("#loss").text("loss  " + loss);
            alert("GAME OVER!!!")

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);
        }



    });

    $("#green").on("click", function() {
        score = score + parseInt(green);
        $("#totalNumber").text(score);


        if (score === random) {
            wins++;
            $("#wins").text("wins  " + win);
            alert("YOU WIN!!!");

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);

        } else if (score > random) {

            loss++;
            $("#loss").text("loss  " + loss);
            alert("GAME OVER!!!")

            score = 0;
            $("#totalNumber").text(score);
            var randomNumber = Math.floor(Math.random() * 102) + 19;
            $("randomNumber").html(randomNumber);
        }



    });


});


//     newGame();
    
//         function newNumbers() {
//             var skulls = [];
//                 skulls = Math.floor(Math.random()*13);
    

           
           
           
           
//             $("#targetNumber").html("Number To Match" + random.toString());
        
//             var found = false;
//                 for (var i=0; i< skulls.length; i++){
                    
//                     if (skulls[i] == random){
//                     found = true; break
//           }
        
        
//         if(!found)skulls[skullValue.length]=random;
//       }

//     score = 0;
//         $("#totalPoints").text(score);

   

// };
//     newtNumbers();
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