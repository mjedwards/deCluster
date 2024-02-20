import React, { useState } from "react";
import TaskModal from "./TaskModal";

const Task = ({ task, index, onDragStart }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { id, title } = task;

	const handleDragStart = (e) => {
		onDragStart(e, task);
	};

	const handleEditClick = () => {
		setIsModalOpen(true);
		console.log(isModalOpen);
	};

    const handleEditClose = () => {
        setIsModalOpen(false)
    }

	return (
		<div
			id={id}
			draggable
			onDragStart={handleDragStart}
			// className='cursor-pointer border border-gray-200 rounded-lg p-4 shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4 task-card'
			className='w-64 h-64 m-4 bg-white border border-gray-300 rounded-lg cursor-pointer transition duration-200 ease-in-out hover:shadow-md'
			style={{ width: "250px", height: "250px" }}>
			<div className='w-6 h-6 text-gray-500' onClick={handleEditClick}>
				Edit
			</div>
			<h1 className='text-lg font-semibold'>{title}</h1>
			{isModalOpen && (
				<TaskModal task={task} isOpen={isModalOpen} onClose={handleEditClose} />
			)}
		</div>
	);
};

export default Task;
