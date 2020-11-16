/*
    controller specifically for follow table
*/

const express = require('express');
const follow = require('../models/follow');
const router = express.Router();

router
.get('/',(req,res,next)=>{
    follow.getAll().then(x=>res.send(x))
    .catch(next);
})
.get('/pendingFollowers',(req,res,next)=>{
    follow.getPendingFollowers(req.body.id)
    .then(x=>res.send( x ))
    .catch(next);
})
.get('/pendingFollows',(req,res,next)=>{
    follow.seePendingFollows(req.body.id)
    .then(x=>res.send( x ))
    .catch(next);
})
.put('/acceptLink',(req,res,next)=>{
    follow.acceptFollow(
        req.body.id
    ).then(x=>res.send(x))
    .catch(next);
})
.put('/createLink',(req,res,next)=>{
    follow.followRequest(
        req.body.following,
        req.body.follower
    ).then(newFollow => res.send(newFollow))
    .catch(next);
})
.delete('/:id',(req,res,next)=>{
    const id = +req.params.id;
    if(!id) return next();
    follow.remove(id)
    .then(x=>res.send(x))
    .catch(next);
})

module.exports = router;