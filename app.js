/*
Birds
webbtjänst med MongoDB mongoose Node.js och ramverket Express
dt162g
maria ågren 2019

*///importera 
var express      = require("express");
var bodyParser   = require("body-parser");
var path         = require("path");
var mongoose     = require("mongoose");

//ansluta till databasen birds Mlab
mongoose.connect("mongodb://Marwile:Stork2019@ds157834.mlab.com:57834/birds", { useNewUrlParser : true }); 
mongoose.Promise = global.Promise;


//importera schema från models
var Birds = require("./models/birds.js");


//instantiera express 
var app = express();

//tillåta åtkomst
app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
	next();
});

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

// statisk sökväg
app.use(express.static(path.join(__dirname, 'public')));

//rest api
//visa alla fåglar med metod find
app.get("/api/birds", function(req, res) {

    Birds.find(function(err, Birds){
        if(err){
            res.json(err);
        }else {
            res.json(Birds);
        }
    });
 });

//visa en kurs
app.get("/api/birds/:id", function (req, res){

    Birds.findById(req.params.id, function(err, Birds){
        if(err) {
            res.json(err);
        }else {
            res.json(Birds);
        } 
    });
});

// lägg till 
app.post("/api/birds/add", function(req, res){

    //ny instans av schemaobjektet
   var bird = new Birds();

    //läsa in värden
    bird.birdName  = req.body.birdName;
    bird.birdPlace = req.body.birdPlace;
    bird.birdMonth = req.body.birdMonth;
    bird.birdYear  = req.body.birdYear;
    bird.birdUser  = req.body.birdUser;
    bird.birdLink  = req.body.birdLink;

  

 
    //spara till databasen och skicka tillbaka ev felmeddelanden
    bird.save(function(err){
        if(err){
            res.json(err);
        }else{
            res.json({message:"fågel sparad"});
        }
    });
});


// delete bird
app.delete("/api/birds/delete/:id", function (req, res){
   Birds.deleteBird({ _id: req.params.id} , function(err){
        if(err){
            res.json(err);
        } else {
            res.json({message: "fågel raderad"});
        }
        });
   });

//port heroku
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

/*/port för anslutning
var port = 3000;

//start server
app.listen(port, function(){
    console.log("Server startades på port" + port);
    
  
});
 */ 




