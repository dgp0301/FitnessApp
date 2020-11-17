/*
    Controller that finds things from workout table
*/
const express = require('express');
const workout = require('../models/workout');
const comments = require('../models/comments');
const reactions = require('../models/reaction');
const router = express.Router();

router
.get('/',(req,res,next)=>{
    workout.getAll().then(x=>res.send(x))
    .catch(next)
})
.get('/:id',(req, res, next)=>{
    const id = +req.params.id;
    if(!id) return next();
    workout.get(id).then(x=>{
        res.send(x)
    }).catch(next);
})
.get(':id/comments', (req,res,next)=>{
    const id = +req.params.id;
    if(!id) return next();
    comments.getWorkoutComments(id)
    .then(x=>res.send(x))
    .catch(next);
})
.get('/:id/reactions',(req,res,next)=>{
    const id = +req.params.id;
    if(!id) return next();
    reactions.getForPost(id)
    .then(x=>res.send( x ))
    .catch(next);
})
.post('/',(req, res, next)=>{
    workout.add(
    req.body.Owner_id,
    req.body.Start_Time,  
    req.body.End_Time, 
    req.body.Excercise_Type,
    req.body.Sets,
    req.body.Reps_Per_Set,
    req.body.Weight,
    req.body.Rpe
    ).then(newWorkout=>{
        res.send(newWorkout);
    }).catch(next);
  
})

module.exports = router;