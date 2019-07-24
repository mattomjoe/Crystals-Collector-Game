// JS code based on YouTube tutorial https://www.youtube.com/watch?v=ki36iUBbCDY&list=PLE2kqXhbJ00hLE8XAe4c204Cr4RJtHGv-&index=14&t=93s

document.addEventListener('DOMContentLoaded', function() {

    // Object/sub-objects to track value of crystals
    
    var crystal = {
        red:
        {
            //name: "Red",
            value: 0
        },
        green:
        {
            //name: "Green"
            value: 0
        },
        blue:
        {
            //name: "Blue"
            value: 0
        },
        purple:
        {
            //name: "Purple"
            value: 0
        }
    };

    var scoreTally = 0; //Running total of user score
    var targetScore = 0; //Randomly generated score for user to try and meet
    var wins = 0;
    var losses = 0;

    var randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var gameStart = function() {

        var scoreTally = 0;

        targetScore = randomNumber(19, 120);

        crystal.red.value = randomNumber(1, 12);
        crystal.green.value = randomNumber(1, 12);
        crystal.blue.value = randomNumber(1, 12);
        crystal.purple.value = randomNumber(1, 12);

        $("#tally").html("<h2>" + scoreTally + "</h2>");
        $("#target-score").html("<h2>" + targetScore + "</h2>");

        console.log("---------------------------------------")
        console.log("Target Score: " + targetScore);
        console.log("Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Blue: " + crystal.blue.value + " | Purple: " + crystal.purple.value);
        console.log("---------------------------------------")

    }

    var addValues = function(crystal) {
        scoreTally = scoreTally + crystal.value;

        console.log("Your Score: " + scoreTally);
    }




    $("#crystal0").click(function() {
        addValues(crystal.red);
    })

    $("#crystal1").click(function() {
        addValues(crystal.green);
    })

    $("#crystal2").click(function() {
        addValues(crystal.blue);
    })

    $("#crystal3").click(function() {
        addValues(crystal.purple);
    })

    gameStart();







})

