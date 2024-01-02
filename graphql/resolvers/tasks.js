const { AuthenticationError, UserInputError } = require("apollo-server");
const Task = require("../../models/Tasks");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getTasks() {
      try {
        const tasks = await Task.find().sort({ createdAt: 1 });
        return tasks;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getTask(_, { taskId }) {
      try {
        const task = await Task.findById(taskId);
        if (task) {
          return task;
        } else {
          throw new Error("Task not found");
        }
      } catch (err) {
        throw new Error("Task not found");
      }
    },
  },
  Mutation: {
    async createTask(_, { title, startDate, time_start, time_end, completed, createdAt }, context) {
      const user = checkAuth(context);

      if (title.trim() === "") {
        throw new Error("Task body must not be empty");
      }

      const newTask = new Task({
        user: user.id,
        username: user.username,
        title,
        startDate,
        time_start,
        time_end,
        completed,
        createdAt: new Date().toISOString()
      });

      const task = await newTask.save();

      return task;
    },
    async deleteTask(_, { taskId }, context) {
      const user = checkAuth(context);

      try {
        const task = await Task.findById(taskId);
        if (user.username === task.username) {
          await task.delete();
          return "Task deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    },
};
