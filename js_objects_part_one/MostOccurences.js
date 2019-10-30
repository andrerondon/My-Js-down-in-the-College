// Write a function that accepts an array of letters. It will return the letter that occurs the most amount of times.

// examples

// mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']); returns 'e'

function mostOccurences (array){
    let mostOcc = {};
    for (let i = 0; i < array.length; i++){
        let letter = array[i];
        if (mostOcc[letter])  {
            mostOcc[letter] += 1;
        } else {
            mostOcc[letter] = 1;
        }  
    } 
    let newArray = {}
    for (let key = 0; key < mostOcc.length; key++){
        maxNumber = mostOcc[key];
    }
      
    return mostOcc;
}
    
console.log(mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']));


// function mostOccurences (array){
//     let mostOcc = {};
//     for (let i = 0; i < array.length; i++){
//         let letter = array[i];
//         if (mostOcc[letter]) {
//             mostOcc[letter] += 1;
//         } else {
//             mostOcc[letter] = 1;
//         }  
//     } 
//     for (let key in Object)
//       return mostOcc;
// }
    
// console.log(mostOccurences(['a', 'b', 'b', 'c', 'd', 'd', 'e', 'e', 'e']));






 
