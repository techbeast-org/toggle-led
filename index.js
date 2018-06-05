var express = require('express'); 
var app = express();
var path = require('path');
var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT);



app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

app.get('/', function(req, res){ 

 	res.sendFile(path.join(__dirname + '/views/index.html'));

});

app.post('/led/on', function(req, res){
gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written True to pin');
	console.log(path.join(__dirname, 'public'));
	return res.sendFile(path.join(__dirname + '/views/index.html'));

    });

});


app.post('/led/off', function(req, res){
gpio.write(7, false, function(err) {
        if (err) throw err;
        console.log('Written False to pin');
	console.log(path.join(__dirname, 'public'));
	return res.sendFile(path.join(__dirname + '/views/index.html'));
	  
  });

});


app.listen(3000, function () {
  console.log('Simple LED Control Server Started on Port: 3000!')
})
