
// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */

/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
// function arrayTotal(inputArray) {
//     let total = 0;
//     inputArray.forEach(function (value) {
//         total += value;
//     })
//     // console.log(total);
//     return total;
// }


// function toTotal(array) {
//     let total = 0
//     array.forEach(function (a) {
//         total += a;
//     });
//     return total;
// }

function arrayTotal(inputArray) {
    let total = 0;
    inputArray.forEach(function (value) {
        total = total + value;
    })
    //console.log(total);
    return total;
}

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
function arrayAverage(inputArray) {
    let total = 0;
    inputArray.forEach(function (value) {
        total = total + value;
    })
    return total/inputArray.length;
}



let nums = [1, 2, 3, 4, 5];
const total = arrayTotal(nums);

console.log(`Q3: Array total -> ${total}`);

let nums1 = [1, 2, 3, 4, 5];
const arrayAvg = arrayAverage(nums);

console.log(`\nQ4: Array average -> ${arrayAvg}`);
