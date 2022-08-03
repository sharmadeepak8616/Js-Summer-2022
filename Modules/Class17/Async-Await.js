
// const request = require('native-request');

// const getTodo = () => {
//     return new Promise((resolve, reject) => {
//         request.get('', (err, data) => {
//             if (err) reject (data)
//             resolve(data)
//         })
//     })
// }

// const getApi = async() => {
//     const response = await getTodo();
// }


// getApi();

/**
 * 
 * connect with server
 * execute the api (https://jsonplaceholder.typicode.com/todos/1) and wait for completion of this step
 * store result in a variable
 *
 * 
 * Promise: function will definitely get some response from server
 *          either could be the data
 *          or any error 
 * 
 * await: we use on the lines where we want to wait for Promise to be fulfilled
 * 
 * 
 * 
 */
/**
 * fetch - function
 *  use to get response from api-server
 */

/*
    you may get the data
    you may not get the data
*/

async function myFunction() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
}


myFunction();
