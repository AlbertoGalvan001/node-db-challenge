const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.findProjects()
        .then(projects => {
            projects.map(projects => {
                if (projects.completed) {
                    projects.completed = true
                } else {
                    projects.completed = false
                }
            })
            return res.status(200).json(projects)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting projects." })
        })
});

router.post('/', (req, res) => {

    Projects.addProjects(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Error adding a new project." })
        })
})

















module.exports = router;