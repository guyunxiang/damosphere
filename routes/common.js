var fs = require('fs');
var path = require('path');

exports.getLanguage = function(language, callback) {
  var jsonPath = 'i18n/' + language + '.json';
  fs.readFile(path.join(__dirname, jsonPath), { encoding: 'utf-8', flag: 'r' },
    function(err, data) {
      if (err) {
        console.log(err);
      }
      callback(data);
    });
}
