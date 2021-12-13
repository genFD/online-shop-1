const path = require('path');
const express = require('express');
const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');
const app = express();
app.use(authRoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
db.connectToDatabase()
  .then(() => app.listen('3002'))
  .catch((e) => console.log(e, 'failed to connect to database'));
