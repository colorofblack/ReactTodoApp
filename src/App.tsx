import './App.css'
import { useState } from 'react';
import TaskList from './components/TaskList.tsx';
import { Task } from './components/TaskView.tsx';
import TaskCreation from './components/TaskCreation.tsx';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const onNewTaskCreation = (newTask:Task)=>
  {
    setTasks([ newTask, ...tasks,]);
  } 

  const onTaskCompletion = (taskCompleteId:number)=>
  {
    const temporaryTaskList = tasks.filter((task)=>{return task.taskId !== taskCompleteId})
    setTasks(temporaryTaskList);
  }

  return (
    <div id="contentContainer">
      <h1>Just Do IT</h1>
      <div id="listContainer">
        <TaskCreation onSendInput = { onNewTaskCreation }/>
        <TaskList taskList={tasks} onTaskComplete={onTaskCompletion}/>
      </div>
    </div>
  )
}

export default App
