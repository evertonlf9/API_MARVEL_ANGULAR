const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/api-marvel-angular/'));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname + '/dist/api-marvel-angular/index.html'))
);

app.listen(process.env.PORT || 8080);