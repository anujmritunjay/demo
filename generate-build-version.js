// /* eslint-enable */


const fs = require('fs');
const packageJson = require('./package.json');

const appVersion = packageJson.version;

const d = new Date()
const utc = d.getTime() + d.getTimezoneOffset() * 60000
const nd = new Date(utc + 3600000 * +5.5)

const jsonData = {
  version: Math.random(),
  upTime: nd.toLocaleString()
};

var jsonContent = JSON.stringify(jsonData);

fs.writeFile('./dist/demo/meta.json', jsonContent, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});

