// Print a triangle with 7 lines of #
for(var i = 0 ; i < 7 ; i++){
    var pound = "";
    
    for(var j = i ; j >= 0 ; j--){
        pound += "#";
    }
    console.log(pound);
}

// FizzBuzz, Print the numbers from 1-100. If num is divisible by 3, print 'Fizz', by 5 'Buzz', by 3 && 5 'FizzBuzz'

for(var i = 1 ; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
}

// Chess board
function printLine(character, num){
    var line = "";
    var oppositeChar = character == "#" ? " " : "#";
    for(var i = 1 ; i <= num ; i++){
        line += i % 2 !== 0 ? character : oppositeChar;
    }
    return line;
}

function printBoard(startingChar, boardSize){
    for(var i = 0 ; i < boardSize; i++){
        var char = i % 2 === 0 ? "#" : " ";
        console.log(printLine(char, boardSize));
    }
}

printBoard("#", 5);