let FavNum = 12;
let correct = false;

while (!correct) {
    var guessNumber = parseInt(prompt("Guess what's my favorite number?"), 10);

    if (guessNumber < FavNum) {
        console.log("Too Low!");
    } else if (guessNumber > FavNum) {
        console.log("Too High!");
    } else {
        console.log("Correct!");
    }
}
