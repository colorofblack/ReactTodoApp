
export interface TaskProps{
    taskId:number;
    taskDescription:string;
    taskDate?:string;
    completeTask: (taskId:number) => void;
}
function Task({taskId, taskDescription="taskDescription", taskDate="Day/Month/Year", completeTask}:TaskProps ){    
    const onTaskComplete = ()=>{
        completeTask(taskId);
    }
    return(
        <div className="taskItem">
            <input type="checkbox" className="taskCheckbox" onChange={onTaskComplete}></input>
            <div className="taskTitle">{taskDescription}</div>
            <div className="taskDate">{taskDate}</div>
        </div>

    )
}
export default Task;