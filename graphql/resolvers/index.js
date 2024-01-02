const eventsResolvers = require('./events')
const userResolvers = require('./users')
const tasksResolvers = require('./tasks')
const miniTaskResolvers = require('./miniTask')


module.exports = {
    Query: {
        ...tasksResolvers.Query,
        ...eventsResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...tasksResolvers.Mutation,
        ...eventsResolvers.Mutation,
        ...miniTaskResolvers.Mutation
    },
}