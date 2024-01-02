const { AuthenticationError, UserInputError } = require("apollo-server");
const event = require("../../models/Events");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getEvents() {
      try {
        const events = await event.find().sort({ createdAt: 1 });
        return events;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getEvent(_, { eventId }) {
      try {
        const event = await event.findById(eventId);
        if (event) {
          return event;
        } else {
          throw new Error("event not found");
        }
      } catch (err) {
        throw new Error("event not found");
      }
    },
  },
  Mutation: {
    async createEvent(_, { title, start_date, end_date, time_start, time_end, description, address, completed, reminder }, context) {
      const user = checkAuth(context);

      if (body.trim() === "") {
        throw new Error("event body must not be empty");
      }

      const newEvent = new event({
        user: user.id,
        username: user.username,
        createAt: new Date().toISOString(),
        title,
        start_date,
        end_date,
        time_start,
        time_end,
        description,
        address,
        completed,
        reminder,
      });

      const event = await newEvent.save();

      context.pubsub.publish("NEW_event", {
        newEvent: event,
      });

      return event;
    },
    async deleteEvent(_, { eventId }, context) {
      const user = checkAuth(context);

      try {
        const event = await event.findById(eventId);
        if (user.username === event.username) {
          await event.delete();
          return "event deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
