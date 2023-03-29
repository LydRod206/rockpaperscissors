//TODO: collect and store user imput
    //use popup window to allow user to pick R, P or S
var userChoice = prompt("Rock! Paper! Scissors!-Choose R, P, or S");
        //EDGE CASE: what if user picks another letter
        //EDGE CASE: what if user picks lowercase
    if (userChoice != "R") {alert("Choose game options!")};
    if (userChoice != "P") {alert("Choose game options!")};
    if (userChoice != "S") {alert("Choose game options!")};

//TODO: randomly select computer choice, store in variable
var choiceArray = ["R", "P", "S"];
var computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    //possible choices include R, P, S
//TODO: compare user and computer choce
var compareResults = (userChoice,computerChoice);{
    if(userChoice=computerChoice){alert("Tie")};
    if(userChoice="R") + (computerChoice="S");{alert("Rock wins")};
    if(userChoice="R") + (computerChoice="P");{alert("Paper wins")};
    if(userChoice="P") + (computerChoice="R");{alert("Paper wins")};
    if(userChoice="P") + (computerChoice="S");{alert("Scissors win")};
}
    //if user = rock and comp = scissors or user = scissors and comp = paper or user = paper and comp = rock, user wins
    //if user
    //if user
//TODO: display results of game
    //track wins, losses, and ties
    //display stats
//TODO: ask user if they want to play again
    //if they say yes, restart game
    //if they say no, stop 
