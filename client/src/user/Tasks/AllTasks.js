import React from "react";
import Task from "./Task/IndividualTask";

const TaskList = ({ tasks, onTaskDrop, onDragStart }) => {
	return (
		<div onDrop={onTaskDrop} onDragOver={(e) => e.preventDefault()} className="flex flex-wrap gap-4">
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDragStart={onDragStart} />
			))}
		</div>
	);
};

export default TaskList;
