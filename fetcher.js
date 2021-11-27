const request = require('request');
const fs = require('fs');

// URL and path to resource
const urlArgvArray = process.argv.slice(2);

const url = urlArgvArray[0];
const path = urlArgvArray[1];

console.log(url);
console.log(path);



request(url, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
  };

  fs.writeFile(`${path}`, body, (error) => {
    if (error) {
      console.log('Error: ', error);
    } 

    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);
  })
})