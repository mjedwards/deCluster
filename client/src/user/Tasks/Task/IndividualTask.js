import React from "react";

const Task = ({ task, onDragStart }) => {
	return (
		<div
			draggable
			onDragStart={(e) => onDragStart(e, task)}
			className="cursor-pointer border border-gray-200 rounded-lg p-4 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
            style={{ width: '250px', height: '250px' }}
		>
			<h1 className="text-lg font-semibold">{task.title}</h1>
		</div>
	);
};

export default Task;
