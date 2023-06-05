const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const sequelize = require('./util/database');
const errorController = require('./controllers/error');
const userRoutes = require('./routes/user');

app.set('views', path.join(__dirname, 'views'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const response = await fetch('http://localhost:5000/user');
        const data = await response.json();
        res.sendFile(path.join(__dirname, 'views', 'index.html'), {user: JSON.stringify(data)});
    } 
    catch (error) {
        console.log(error);
    }
});
app.use(userRoutes);
app.use(errorController.get404);

sequelize
    .sync()
    .then(res => {
        app.listen(5000);
    }) 
    .catch(err => {
        console.log(err);
    });