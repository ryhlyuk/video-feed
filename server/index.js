var express = require('express');
var app = express();

//setting middleware
app.use('/assets/*', express.static(__dirname + '/assets')); //Serves resources from public folder
console.log(__dirname + '/assets');

app.listen(5000, () => {
    console.log("Server started successfully on 5000");
});
