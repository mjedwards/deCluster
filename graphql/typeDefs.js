const { gql } = require('apollo-server');

module.exports = gql`
  type Event {
    id: ID!
    title: String!
    createdAt: String!
    username: String!
    start_date: String
    end_date: String
    time_start: String
    time_end: String
    description: String
    address: String
    completed: Boolean
    reminder: Boolean
  }
  type Task {
    id: ID!
    createdAt: String!
    username: String!
    title: String!
	  startDate: String
	  time_start:String
	  time_end:String
    mini_tasks: [Tasks]!
    completed: Boolean
  }
  type Tasks {
    id: ID!
    username: String!
    title: String!
    startDate: String
    time_start:String
    time_end:String
    completed: Boolean
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getTasks: [Task]
    getTask(taskId: ID!): Task
    getEvents: [Event]
    getEvent(eventId: ID!): Event
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email_username: String!, password: String!): User!
    createTask(title: String!, startDate:String): Task!
    deleteTask(taskId: ID!): String!
    createEvent(eventId: String!, title: String!): Event!
    deleteEvent(eventId: ID!): Event!
    createMiniTask(taskId: ID!, title: String): Task!
    deleteMiniTask(taskId: ID!, miniTaskId: ID!): Task!
  }
`;