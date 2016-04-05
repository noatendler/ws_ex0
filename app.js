'use strict';

var event = require('events');
var http = require('http');
var hotel = require('./grade');

http.createServer(function(req, res){
    res.writeHeader(200);
    
    var h1 = new hotel('plaza', 'vanautu');

    h1.on("change",function(){
        console.log(` in ${h1.name} hotel ${h1.country}`);
        if(h1.grade<0)
        {
            h1.check();
        }
    });

    h1.on("hotelID", function(){
        console.log(`these are the hotel current details`);
    });

    h1.showHotel();
    h1.addLiks(5);
    h1.subtractLiks(7);

    res.write(h1.getArray().toString() + "\r\n");
    res.end();

}).listen(8080);