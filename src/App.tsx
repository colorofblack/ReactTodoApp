import './App.css'
import { useState, useRef, useEffect } from 'react';
import TaskList from './components/TaskList.tsx';
import { Task } from './components/TaskView.tsx';
import TaskCreation from './components/TaskCreation.tsx';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onNewTaskCreation = (newTask:Task)=>{
    //console.log(newTask);
    setTasks([...tasks, newTask]);
  } 

  const taskElements = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    if(taskElements.current){
      /*const taskItems = taskElements.current.querySelectorAll('div.taskItem');
      taskItems.forEach((tI:any)=>{
        console.log(tI.getBoundingClientRect().top);
      })*/

    }
  })

  const onTaskCompletion = (taskCompleteId:number)=>{
    console.log("Task Number "+taskCompleteId+" complete! Kill it with fire");
    const temporaryTaskList = tasks.filter((task)=>{return task.taskId !== taskCompleteId})
    setTasks(temporaryTaskList);
  }

  return (
    <div id="contentContainer">
      <h1>Just Do IT</h1>
      <div id="listContainer" ref={taskElements}>
        <TaskCreation onSendInput = { onNewTaskCreation }/>
        <TaskList onTaskComplete={onTaskCompletion} taskList={tasks}/>
      </div>
    </div>
  )
}

export default App
