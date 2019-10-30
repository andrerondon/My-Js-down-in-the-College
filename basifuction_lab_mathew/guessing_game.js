function guessNumber(n) {
    let number = Math.floor (Math.random() * Math.floor(n));
    return (guess) => {
        if (guess === number) {
            return true;
        } else {
          return ('false')
        }
        
    }

}

const guessingGame = guessNumber(10)



// function game(numberA) {
//     var x = 0;
//     while (x>numberA)
//     console.log(numberA);
                                  
//     Math.random(numberA) 
// }



// game(x)

