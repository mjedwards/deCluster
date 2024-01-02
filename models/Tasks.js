const { model, Schema } = require('mongoose')

const taskSchema = new Schema({
    title: String,
    username: String,
	startDate: String,
	time_start:String,
	time_end:String,
	completed: Boolean,
	mini_tasks: [
		{
			title: String,
			username: String,
			startDate: String,
			time_start:String,
			time_end:String,
			completed: Boolean,
		}
	],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Task', taskSchema);