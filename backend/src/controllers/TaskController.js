const Task = require("../models/Task");
const axios = require("axios");

module.exports = {
  async index(req, res) {
    const tasks = await Task.find();

    return res.json(tasks);
  },

  async store(req, res) {
    const { taskName, start, end } = req.body;

    let task = await Task.findOne({ taskName });

    if (!task) {
      task = await Task.create({
        taskName,
        start,
        end,
      });
    }

    return res.json(task);
  },

  async delete(req, res) {
    await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted." });
  },
};
