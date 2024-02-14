import React, { useState } from "react";
import TaskList from "./Tasks/AllTasks";
import AppLayout from "../layout/AppLayout";

function UserDashboard() {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Task 1" },
		{ id: 2, title: "Task 2" },
		{ id: 3, title: "Task 3" },
		{ id: 4, title: "Task 4" },
		{ id: 5, title: "Task 5" },
		{ id: 6, title: "Task 6" },
		{ id: 7, title: "Task 7" },
		// ... other tasks
	]);

    const onTaskDrop = (e) => {
        e.preventDefault();
        const droppedTaskId = e.dataTransfer.getData("application/reactflow");
        const draggedTask = tasks.find((task) => task.id === Number(droppedTaskId));
        const dropIndex = tasks.findIndex((task) => task.id === Number(e.target.id));
      
        // Check if the dragged task is dropped above or below its original position
        const updatedTasks = [...tasks];
        const draggedTaskIndex = updatedTasks.findIndex((task) => task.id === draggedTask.id);
        
        // Remove the dragged task from its original position
        updatedTasks.splice(draggedTaskIndex, 1);
        
        // Insert the dragged task at the appropriate index based on drop location
        if (dropIndex < draggedTaskIndex) {
          updatedTasks.splice(dropIndex, 0, draggedTask);
        } else {
          updatedTasks.splice(dropIndex + 1, 0, draggedTask);
        }
      
        // Update state to reflect the new task order
        setTasks(updatedTasks);
    };

	const onDragStart = (e, task) => {
		e.dataTransfer.setData("application/reactflow", task.id);
		e.dataTransfer.effectAllowed = "move";
	};

	return (
		<AppLayout>
			<div columns={3} className="h-full">
				<div>
					<div className="lg:pl-72">
						<main className="py-10">
							<div className="px-4 sm:px-6 lg:px-8">
								<TaskList tasks={tasks} onTaskDrop={onTaskDrop} onDragStart={onDragStart} />
							</div>
						</main>
					</div>
				</div>
			</div>
		</AppLayout>
	);
}

export default UserDashboard;
