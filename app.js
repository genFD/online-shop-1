const express = require('express');
const authRoutes = require('./routes/auth.routes');
const app = express();
app.use(authRoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.listen('3002');
