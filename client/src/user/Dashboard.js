import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context/auth";

import TaskList from "./Tasks/Tasks";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery();

  // dummy data that will represent a list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    // ... other tasks
  ]);


  const onTaskDrop = e => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData('application/reactflow');
      const task = tasks.find(t => t.id === Number(taskId));
      // Update the tasks state based on where the task was dropped
      // This is where you'd rearrange the tasks array
  };

  return (
    <div columns={3}>
      <TaskList tasks={tasks} onTaskDrop={onTaskDrop} />
    </div>
  );
}

export default Dashboard;
