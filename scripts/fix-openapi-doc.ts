var http = require('http');
var fs = require('fs');


function fixFile(filename: string) {
  fs.readFile(filename, 'utf8', function (err: any, data: string) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/\{\"\$ref\":\"Error-ModelName\{namespace=\'java.time\', name=\'Instant\'}\"}/g, '{"type":"string","format":"date-time"}');

    fs.writeFile(filename, result, 'utf8', function (err: any) {
      if (err) return console.log(err);
    });
  });
}

console.log('Fixing openapi specs');
fixFile('openapi-docs/specs.json');
