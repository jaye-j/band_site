const express = require('express');
const app = express();

//public folder
app.use(express.static('public'));

//set view folder
app.set('view engine', 'ejs');

//set routes
app.use(require('./controllers/index.js'));
app.use(require('./controllers/albums.js'));
app.use(require('./controllers/feedback.js'));

app.listen(3000, () => {
    console.log("listening on port 3000");
});