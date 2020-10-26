var express = require("express");
var app = express(); 

app.use(express.static('public'));

app.get("/", function(req, res)
	  {
	res.sendFile('/public/space_invaders.html', {root: __dirname })
}); 


app.get("*", function(req, res){
	res.sendFile('/public/space_invaders.html', {root: __dirname })
});

app.listen(process.env.PORT || 3000 , function (){
	console.log("server started :)");
});