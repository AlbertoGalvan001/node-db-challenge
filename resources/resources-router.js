const express = require('express');
const router = express.Router()
const Resources = require('./resources-model.js');

router.get('/', (req, res) => {
    Resources.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting resources." })
        })
});

router.post('/', (req, res) => {

    Resources.addResources(req.body)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Error adding a new resource." })
        })
});









module.exports = router;