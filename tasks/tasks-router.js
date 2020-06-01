const express = require('express');
const router = express.Router()
const Tasks = require('./tasks-model');

router.get('/', (req, res) => {
    Tasks.findTasks()
        .then(tasks => {
            tasks.map(tasks => {
                if (tasks.completed) {
                    tasks.completed = true
                } else {
                    tasks.completed = false
                }
            })
            return res.status(200).json(tasks)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting tasks." })
        })
});

router.post('/', (req, res) => {

    Tasks.addTasks(req.body)
        .then(newTask => {
            res.status(201).json(newTask);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Error adding a new task." })
        })
})




module.exports = router;