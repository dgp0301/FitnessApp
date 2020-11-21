/*
    starting portion of the server breaks of into smaller controllers 
*/

const express = require('express');
require('dotenv').config();

const users = require('./controllers/users');
const workout = require('./controllers/workout');
const follow = require('./controllers/follow');
const comments = require('./controllers/comments');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', express.static(__dirname + '/../docs/'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(function(req,res,next){
    const arr = (req.headers.authorization ||"").split(" ");
    if ( arr.length > 1 && arr[1] != null ){
        req.userId = +arr[1];
    }
    next();
});

app.get('/',(req,res)=>{
    res.send('Hi this is me working on my fitness project');
})

app.use('/users',users);
app.use('/workout',workout);
app.use('/follow',follow);
app.use('/comments',comments);

app.get('*',(req,res,next)=>{
    res.sendFile( path.join(__dirname + '/../docs/index.html') )
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status( err.status || 500 ).send( { message: err.message } )
})

app.listen(port,()=>{
    console.log(`Fitness app listening at http://localhost:${port}`);
})
