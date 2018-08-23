'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	var a = 0;
	for(var i = 0; i < 1000000; i++) {
	     a += i;
	}
  res.send('Hello world:\n' + a);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);