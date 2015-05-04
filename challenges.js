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

// Min of two arguments
function min(first, second){
    return first <= second ? first : second;
}

// isEven
function isEven(num){
    num = Math.abs(num);
    if(num === 0){
        return true;
    }
    else{
        return isEven(num-1) % 2 === 0;
    }
}

// Count chars in a string
function countB(str){
    return countChars(str, "B");
}

function countChars(str, char){
    var num = 0;
    
    for(var i = 0 ; i < str.length ; i++){
        if(str.charAt(i) == char){
            num += 1;
        }
    }
    return num;
}

