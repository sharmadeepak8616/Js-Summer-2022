let fruits = ['mango', 'apple', 'banana', 'cherry'];


// print fruit-values

fruits.forEach(function (fruit) {
    console.log(fruit);
}) 

// does fruit-value contains 'b'
fruits.forEach(function (fruit) {
    if (fruit.includes('b')) {
        console.log(`fruit with 'b' -> ${fruit}`);
    }
})

fruits.indexOf('banana');


/**
 * for (String name : arrayList) {
 *  sout(name);
 * }
 */

/**
 * map()
 *      performs action on every value of array, and creates new array with result
 */

// let fruits = ['mango', 'apple', 'banana', 'cherry'];
// replace 'a' with 'Z' in all the values of fruits array

function replace_a_With_Z(value) {
    // value.replace('a', 'Z');
    return value.replace(/a/gi, 'Z');   // banana
}


const newFruits = fruits.map(replace_a_With_Z);
console.log(`\nfruits -> ${fruits}`);
console.log(`newFruits -> ${newFruits}\n`);

/**
 * filter
 *      creates new array with the values which satisfy given condition(s)
 */

const fruitsWith_a = fruits.filter(fruit => fruit.includes('a'));
console.log(`\nfruits -> ${fruits}`);
console.log(`fruitsWith_a -> ${fruitsWith_a}\n`);










