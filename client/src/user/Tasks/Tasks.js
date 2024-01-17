import React from 'react';
import Task from './Task/Task'

const TaskList = ({ tasks, onTaskDrop }) => {
    const onDragStart = (e, task) => {
        e.dataTransfer.setData('application/reactflow', task.id);
        e.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div onDrop={onTaskDrop} onDragOver={e => e.preventDefault()}>
        {tasks.map(task => <Task key={task.id} task={task} onDragStart={onDragStart} />)}
    </div>
    )
};

export default TaskList;
