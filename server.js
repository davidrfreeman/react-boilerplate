'use strict';
var express = require("express");

let app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, function() {
  console.log('App up and running');
});