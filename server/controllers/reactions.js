//controller for reactions

const express = require('express');
const reaction = require('../models/reaction');

const router = express.Router();

router
.get('/', (req, res, next) => {
        reaction.getAll().then(x=> res.send( x ) ) 
        .catch(next);
    })
.get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        reaction.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
.get('/search', (req, res, next) => {
        reaction.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
.post('/', (req, res, next) => {
        reaction.add(
            reaction.Emojis.LOVE,
            req.body.Post_id, 
            req.body.Owner_id, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
.put('/:id', (req, res, next) => {
        reaction.update( req.params.id, 
            req.body.Post_id, 
            req.body.Owner_id, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
.delete('/:id', (req, res, next) => {
        reaction.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;
