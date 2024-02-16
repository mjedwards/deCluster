// UserDashboard.js

import React, { useState } from "react";
import TaskList from "./Tasks/AllTasks";
import AppLayout from "../layout/AppLayout";
import {
	onTaskDrop,
	onDragStart,
	onDragOver,
	onDragEnter,
	onDragLeave,
} from "../utils/dragDrop/dragDropFunctions";
import dummyTasks from "../utils/data/dummydata";

function UserDashboard() {
	const [tasks, setTasks] = useState(dummyTasks);

	return (
		<AppLayout>
			<div className='lg:pl-72'>
				<main className='py-10'>
					<div className='px-4 sm:px-6 lg:px-8'>
						<TaskList
							tasks={tasks}
							onTaskDrop={(e) => onTaskDrop(e, tasks, setTasks)}
							onDragStart={onDragStart}
							onDragOver={onDragOver}
							onDragEnter={onDragEnter}
							onDragLeave={onDragLeave}
						/>
					</div>
				</main>
			</div>
		</AppLayout>
	);
}

export default UserDashboard;
