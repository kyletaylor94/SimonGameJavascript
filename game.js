$("h1").css('color', 'red');

var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started){
     $("#level-title").text("Level: " + level);
     nextSequence();
     started = true;
    }
});




$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);

    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length -1);
});


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}



function nextSequence(){

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level" + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function animatePress(currentColour){
    $("#"+ currentColour).addClass("pressed");
    setTimeout(function() {
    $('#' + currentColour).removeClass("pressed");
       }, 100);

    

}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("thats right"); 

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
            console.log("thats wrong");
            
            playSound("wrong");
            
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);

            $("#level-title").text("Game Over, Press Any Key to Restart");
            startOver();
        }
}


function startOver(){
    var level = 0
    var gamePattern = []
    var started = false;
};


