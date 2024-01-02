const { model, Schema } = require('mongoose')

const eventSchema = new Schema({
    title: String,
    username:String,
    createAt: String,
    start_date: String,
    end_date: String,
    time_start: String,
    time_end: String,
    description: String,
    address: String,
    completed: Boolean,
    reminder: Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Event', eventSchema);