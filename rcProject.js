let y = Math.floor(Math.random() * 100 + 1);
console.log(y);
let guess = 1;
document.getElementById("submitguess").onclick = function () {
    // Number guessed by user 
    let x = document.getElementById("guessField").value;
    if (x == y) {
        document.body.style.background = "green";
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS ");
        
    }
    /* If guessed number is greater than actual number*/
    else if (x > y) {
        guess++;
        document.body.style.background = "red";
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else {
        guess++;
        document.body.style.background = "red";
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
}

document.getElementById("resetForm").onclick = function (){
    y = Math.floor(Math.random() * 100 + 1);
    guess=1;
    alert("The game has been restarted!!!");
    document.body.style.background = "white";
}