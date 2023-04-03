const fs = require('fs');
const stream = fs.createReadStream('./data.txt');

stream.on('data', (chunk) => {
  console.log(chunk.toString());
});

stream.on('end', () => {
  console.log('Finished reading data.');
});
