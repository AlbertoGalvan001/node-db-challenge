const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('./projects/projects-router');
const ResourcesRouter = require('./resources/resources-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);


//initial GET
server.get('/', (req, res) => {
    res.send(`<h2>Server is up!</h2>`)
})

module.exports = server;