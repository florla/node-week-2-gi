const fs = require('fs');
const newfiles = fs.readFileSync('solar.txt', 'utf-8');
console.log(newfiles);