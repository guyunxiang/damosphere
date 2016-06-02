var index = require('./pageRoutes/index');
var i18n = require('./i18n');

module.exports = function(app) {

  app.get('/', index.index);
  app.get('/en', index.index);
}
