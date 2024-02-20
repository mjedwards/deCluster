import React from "react";

function EditTask({task, onClose}) {
    const {title} = task;
	return (
		<div>
			{/* Your edit task form or content goes here */}
			<h1>Edit Task</h1>
			<h2>{title}</h2>
			{/* Example form fields */}
			<input type='text' placeholder='Task Title' />
			<textarea placeholder='Task Description' rows='4'></textarea>
            {/* this will be an update request */}
			<button onClick={onClose}>Save Changes</button>
		</div>
	);
}

export default EditTask;
