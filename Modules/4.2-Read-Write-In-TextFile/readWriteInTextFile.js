const fs = require('fs');

// using readFile with complete path
fs.readFile('/Users/deepaksharma/Desktop/Personal/AllProjects/Javascript/Modules/4-JsProgramming-Part2/4.2-Read-Write-In-TextFile/sample.txt', 'utf-8', (err, data) => {
if (err) {
    console.log('\nError starts');
    console.log(err);
    console.log('Error ends\n');
    // throw err;
    return;
}
console.log(data);
});

// using readFile with relative path
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('\nError starts');
        console.log(err);
        console.log('Error ends\n');
        // throw err;
        return;
    }
    console.log(data);
});


// using readFileSync
try {
  const data = fs.readFileSync('./sample.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}



const content = 'new data for file';
console.log(content);

// fs.writeFile('sample.txt', content, err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });

// fs.appendFile('sample.txt', content, err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });