import React, { useRef, useEffect } from "react";
import Task from "./Task/IndividualTask";
import Sortable from 'sortablejs';


const TaskList = ({
	tasks,
	onDragStart,
}) => {
    const sortableContainer = useRef(null);

    useEffect(() => {
      if (sortableContainer.current) {
        Sortable.create(sortableContainer.current, {
          animation: 150,
          ghostClass: 'sortable-ghost',
          
        });
      }
    }, []);

	return (
		<div
			className='flex flex-wrap gap-4 task-list overflow-y-scroll h-screen sortable-container'
            ref={sortableContainer}
		>
			{tasks.map((task) => (
				<Task key={task.id} task={task} onDragStart={onDragStart} />
			))}
		</div>
	);
};

export default TaskList;
