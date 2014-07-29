'use strict'

var express = require('express'),
	app = express(),
	logger = require('morgan'),
	http = require("http");

app.use(logger());

app.use(require("./lib/controller"));

http.createServer(app).listen(3000);
