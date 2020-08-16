const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const db = mongoose.connection;

mongoose.connect("mongodb://localhost/my_city_db",{useNewUrlParser: true, useUnifiedTopology: true});
db.on('error',(error) => {
  console.log('connection error', error);
});
db.once('open', () => {
  console.log('connected');
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
//app.use(express.static(path.join(_dirname,'public')));
app.use(express.static(__dirname + '/public'));

app.use(require('./routes'));

app.listen(port, () => {
  console.log('Server started !');
});
