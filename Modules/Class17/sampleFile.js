const fetch = require('node-fetch');

async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());