const checkAuth = require("../../util/check-auth");
const Task = require("../../models/Tasks");

module.exports = {
  Mutation: {
    createMiniTask: async (_, { taskId, title,time_start,
        time_end,
        completed}, context) => {
      const { username } = checkAuth(context);
      if (title.trim() === "") {
        throw new UserInputError("Empty Mini Task", {
          errors: {
            body: "Mini Task must not be empty",
          },
        });
      }

      const task = await Task.findById(taskId);
      console.log(title, time_start, time_end, completed)
      if (task) {
        task.mini_tasks.push({
            username: username,
            title,
            time_start,
            time_end,
            completed,
            createdAt: new Date().toISOString()
          });

        await task.save();
        return task;
      } else throw new UserInputError("Task not found");
    },
    async deleteMiniTask(_, { taskId, miniTaskId }, context) {
      const { username } = checkAuth(context);

      const task = await Task.findById(taskId);

      if (task) {
        const taskIndex = task.mini_tasks.findIndex((t) => t.id === miniTaskId);

        if (task.mini_tasks[taskIndex]) {
          task.mini_tasks.splice(taskIndex, 1);
          await task.save();
          return task;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Task not found");
      }
    },
  },
};