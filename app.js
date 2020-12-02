const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes/index'));

app.listen(port, () => { console.log('App listening at port http://localhost:' + port + '.') });