var common = require('../common');

exports.index = function(req, res) {
  var lang = req.url.split('/')[1];
  common.getLanguage(lang ? lang : 'cn', function(data) {
    var dataObj = JSON.parse(data);
    res.render('index', dataObj.index );
  })
};
