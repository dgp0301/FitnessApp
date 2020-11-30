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
.get('/:id/pendingFollowers',(req,res,next)=>{
    const id = +req.params.id;
    if(!id){return next();}
    follow.getPendingFollowers(id)
    .then(x=>res.send( x ))
    .catch(next);
})
.get('/:id/pendingFollows',(req,res,next)=>{
    const id = +req.params.id;
    if(!id){return next();}
    follow.seePendingFollows(id)
    .then(x=>res.send( x ))
    .catch(next);
})
.post('/acceptLink',(req,res,next)=>{
    follow.acceptFollow(
        req.body.id
    ).then(x=>res.send(x))
    .catch(next);
})
.post('/createLink',(req,res,next)=>{
    follow.followRequest(
        req.body.following,
        req.body.follower
    ).then(newFollow => res.send(newFollow))
    .catch(next);
})
.delete('/',(req,res,next)=>{
    follow.remove(req.body.id)
    .then(x=>res.send(x))
    .catch(next);
})

module.exports = router;