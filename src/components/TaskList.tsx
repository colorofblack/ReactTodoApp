import TaskView from "./TaskView";
import { Task } from "./TaskView";

interface TaskListProp{
    taskList:Task[];
    onTaskComplete: (taskId:number)=> void
}
function TaskList({taskList, onTaskComplete}:TaskListProp){

    const handleTaskComplete = (taskId:number) => {
        onTaskComplete(taskId);
  
    }
    console.log("taskLength: "+taskList.length);
    return(
        <div className="taskListContainer">
            {taskList.map((taskItem:Task, i) => ( 
                <TaskView key={taskItem.taskId} position={i} task={taskItem} completeTask={handleTaskComplete}></TaskView>
            ))}
         </div>
    );
}

export default TaskList;