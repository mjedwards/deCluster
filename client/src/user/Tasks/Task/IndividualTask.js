import React from "react";

const Task = ({ task, index, onDragStart }) => {
    const { id, title } = task;

    const handleDragStart = (e) => {
      onDragStart(e, task); 
    };
	return (
		<div
            id={id}
			draggable
			onDragStart={handleDragStart}
			// className='cursor-pointer border border-gray-200 rounded-lg p-4 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4 task-card'
            className="w-64 h-64 m-4 bg-white border border-gray-300 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:shadow-md"
			style={{ width: "200px", height: "200px" }}>
			<h1 className='text-lg font-semibold'>{title}</h1>
		</div>
	);
};

export default Task;
