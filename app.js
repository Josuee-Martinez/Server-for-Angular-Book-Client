var express = require('express'); 
var app = express(); 
var book = require('./controllers/bookcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');
//3         //4
app.listen(3000, () => console.log('listening on port 3000'));

 sequelize.sync();

 app.use(bodyParser.json());

 app.use(require('./middleware/headers'));

 app.use('/book', book);