const app_o = require('./controller');

app_o.listen(8001, function () {
  console.log('server listening on port 8001!');
});