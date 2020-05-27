const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
