// import dependencies
require('dotenv').config();
const express = require('express');
const UsersController = require('../controllers/users');
const UsersService = require('../services/users');
const UserRepositories = require('../repositories/users');
const DatabaseConnection = require('../config/database');

const router = express.Router();

// env
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// initialize 
const dbConnection = new DatabaseConnection(dbHost,dbPort,dbUser,dbPassword,dbName);
const connection = dbConnection.mysqlConnect();
const userRepo = new UserRepositories(connection);
const userService = new UsersService(userRepo);
const usersController = new UsersController(userService);

// define routes
router.post('/users', (req, res) => usersController.createUser(req, res));
router.get('/users', (req, res) => usersController.getAllUsers(req, res));
router.get('/users/:id', (req, res) => usersController.getUserById(req, res));
router.put('/users/:id', (req, res) => usersController.updateUser(req, res));
router.delete('/users/:id', (req, res) => usersController.deleteUser(req, res));

module.exports = router;
