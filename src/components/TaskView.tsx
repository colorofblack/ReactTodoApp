
interface TaskProps{
    task:Task;
    completeTask: (taskId:number) => void;
}
export interface Task{
    taskId:number;
    taskDescription:string;
    taskDate?:string;
}
function TaskView({task, completeTask}:TaskProps ){    
    const onTaskComplete = ()=>{
        completeTask(task.taskId);
    }
    return(
        <div className="taskItem">
            <input type="checkbox" className="taskCheckbox" onChange={onTaskComplete}></input>
            <div className="taskTitle">{task.taskDescription}</div>
            <div className="taskDate">{task.taskDate}</div>
        </div>
    )
}
export default TaskView;