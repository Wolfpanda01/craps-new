function play_craps() {
    console.log("play_crabs()funtion Started");
    var die1 = Math.ceil(Math.random() * 6);


    var die2 = Math.ceil(Math.random() * 6);



    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = "Die 1 " = + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 " = + die2;
    document.getElementById("sumRes").innerHTML = "sum " = + sum;

    if (sum == 7 || sum == 11) {
        loss = loss + 1;
        document.getElementById("loseRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";

    }
    else if (die1 == die2 && die1 % 2 == 0) {
        win++;
        document.getElementById("winRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML = "Draw - you neither won nor lost. Please try again ";
    }
}


function blastoff() {
    var currTime = 50;
    document.getElementById("countdowntimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 5000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 10000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 15000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 20000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime;
    }, 25000);

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = "Blastoff!";
    }, 30000)
}