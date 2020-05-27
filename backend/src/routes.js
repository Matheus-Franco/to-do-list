const { Router } = require("express");

const TaskController = require("./controllers/TaskController");

const routes = Router();

routes.post("/tasks", TaskController.store);
routes.get("/tasks", TaskController.index);
routes.delete("/task/:id", TaskController.delete);

module.exports = routes;
