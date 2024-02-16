import React from "react";
import Task from "./Task/IndividualTask";

const TaskList = ({
	tasks,
	onTaskDrop,
	onDragStart,
	onDragOver,
	onDragEnter,
	onDragLeave,
}) => {
	return (
		<div
			className='flex flex-wrap gap-4 task-list overflow-y-scroll h-screen'
			onDrop={onTaskDrop}
			onDragOver={onDragOver}
			onDragEnter={onDragEnter}
			onDragLeave={onDragLeave}
		>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDragStart={onDragStart} />
			))}
		</div>
	);
};

export default TaskList;
