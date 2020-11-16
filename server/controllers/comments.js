//Controller for comments table 

const express = require('express');
const comments = require('../models/comments');

const router = express.Router();

router
.get('/',(req, res, next)=>{
    comments.getAll().then(x=>res.send(x))
    .catch(next);
})
.get('/workout',(req,res,next)=>{
    comments.getWorkoutComments(
        req.body.id
    ).then(x=>res.send(x))
    .catch(next);
})
.get('/usersId',(req,res,next)=>{
    comments.getAllUsersComments(
        req.body.id
    ).then(x=>res.send(x))
    .catch(next);
})
.put('/add',(req,res,next)=>{
    comments.add(
        req.body.Text,
        req.body.Workout_id,
        req.body.Owner_id
    ).then(x=>res.send(x))
    .catch(next);
})
.delete('/',(req,res,next)=>{
    comments.remove(
        req.body.id
    ).then(x=>res.send(x))
    .catch(next);
})

module.exports = router;