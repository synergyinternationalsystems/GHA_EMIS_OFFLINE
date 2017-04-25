/**
 * Created by haykanush.torchyan on 11/23/2016.
 */
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendfile(__dirname + 'index.html');
});

app.listen(3333);
