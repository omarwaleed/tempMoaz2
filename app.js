const express = require('express');
const Path = require('path');
const app = express();

app.use(express.static(Path.join(__dirname, 'public')));

app.get('/', function(req, res){
	app.render('home', function(err, html){});
})

app.listen(3000, function(err){
	if(err){
		throw err;
	}
	console.log('listening on port');
})