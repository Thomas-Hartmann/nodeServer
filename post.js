const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('index.html', {"root": __dirname}); //passing the root of the application
});
app.post('/submit', (req, res) => {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

