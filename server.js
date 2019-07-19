const express = require('express');
const bodyparser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({
    extended: true
}));
// parse requests of content-type - application/json
app.use(bodyparser.json());
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Sucessfully connected to database ");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Require Notes routes
const Note = require('./app/routes/note.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});