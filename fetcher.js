const request = require("request");
const fs = require("fs");

let url = process.argv[2];
let fileUrl = process.argv[3];
// console.log(process.argv);

request(`${url}`, (error, response, body) => {
  const stats = fs.statSync(fileUrl);
  const fileSizeInBytes = stats["size"];      

  fs.writeFile(fileUrl, body, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${fileUrl}.`);
  });
});
