// dragDropFunctions.js

export const onTaskDrop = (e, tasks, setTasks) => {
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
      updatedTasks.splice(dropIndex, 0, draggedTask);
    }
  
    // Update state to reflect the new task order
    setTasks(updatedTasks);
  };
  
  export const onDragStart = (e, task) => {
    e.dataTransfer.setData("application/reactflow", task.id);
    e.dataTransfer.effectAllowed = "move";
  };
  
  export const onDragOver = (e) => {
    e.preventDefault();
  };
  
  export const onDragEnter = (e) => {
    e.preventDefault();
  };
  
  export const onDragLeave = (e) => {
    e.preventDefault();
  };
  