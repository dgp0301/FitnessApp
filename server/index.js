/*
    starting portion of the server breaks of into smaller controllers 
*/

const express = require('express');
require('dotenv').config();

const users = require('./controllers/users');
const workout = require('./controllers/workout');
const follow = require('./controllers/follow');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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

app.use((err,req,res,next)=>{
    console.log(err);
    res.status( err.status || 500 ).send( { message: err.message } )
})

app.listen(port,()=>{
    console.log(`Fitness app listening at http://localhost:${port}`);
})
