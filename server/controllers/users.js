/*
    This gets all of the gets things from the users table 
*/

const express = require('express');
const users = require('../models/users');
const follow = require('../models/follow');
const workout = require('../models/workout');
const router = express.Router();

router
.get('/', (req, res, next)=>{
    users.getAll().then(x=>res.send(x.map(user=> ({ ...user, Password: undefined}))))
    .catch(next)
})

.get('/:id',(req, res, next)=>{
    const id = +req.params.id;
    if(!id) return next();
    users.get(id).then(x=> res.send( x ))
    .catch(next);
})
//change to use header eventually cant figure it out currently
.get('/:id/followers',(req, res, next)=>{
    const id = +req.params.id;
    if(!id){return next();}
    follow.getFollowinger(id).then(x => res.send( {x} ))
    .catch(next);
})
.get('/:id/myworkouts',(req,res,next)=>{
    const id = +req.params.id;
    if(!id){return next();}
    workout.getUserWorkouts(id).then(workouts=>res.send(workouts))
    .catch(next);
})
.get('/:id/workoutfeed',(req,res,next)=>{
    const id = +req.params.id;
    if(!id){return next();}
    workout.getFollowedWorkouts(id).then(x=>res.send(x))
    .catch(next);
})
.get('/types',(req,res,next)=>{
    users.getTypes().then(x=>res.send(x))
    .catch(next);
})
.get('/search',(req,res, next)=>{
    users.search(req.query.q).then(x=>res.send(x))
    .catch(next)
})
.post("/", (req, res, next) =>{
    users.add(
        req.body.FirstName, 
        req.body.LastName, 
        req.body.DOB,
        req.body.Password,
        users.Types.USER,
        ).then(newUser => {
        res.send(newUser);
    }).catch(next)
})
.post('/register', (req, res, next)=>{
    users.register(
        req.body.FirstName,
        req.body.LastName, 
        req.body.DOB,
        req.body.Password,
        users.Types.USER,
        req.body.Email
    ).then(newUser => {
        res.send({ ...newUser, Password: undefined } );
    }).catch(next)
})
.post('/login',(req, res, next)=> {
    users.login(
        req.body.email,
        req.body.password
    ).then(newUser=>{
        res.send( { ...newUser, Password:undefined});
    }).catch(next)
})
.put("/:id", (req, res, next) =>{
    users.update(req.params.id,
        req.body.FirstName, 
        req.body.LastName, 
        req.body.DOB,
        req.body.Password,
        users.Types.USER,
        ).then(newUser => {
        res.send(newUser);
    }).catch(next)
})
.delete("/:id", (req,res,next)=>{
    users.remove(req.params.id).then(msg => {res.send(msg)
    }).catch(next)
})


module.exports = router;