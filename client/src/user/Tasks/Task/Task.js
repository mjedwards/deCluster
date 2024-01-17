import React from 'react';

const Task = ({ task, onDragStart }) => {
    return (
        <div draggable onDragStart={e => onDragStart(e, task)}>
        {task.title}
    </div>
    )
};

export default Task;