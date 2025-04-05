import { useState, useEffect } from "react";
interface TaskProps{
    task:Task;
    completeTask: (taskId:number) => void;
}
export interface Task{
    taskId:number;
    taskDescription:string;
    taskDate?:string;
    closed:boolean;
}
function TaskView({task, completeTask}:TaskProps ){   
    useEffect(()=>{ setIsOpen(true); },[])
 
    const onTaskComplete = ()=>{
        setTimeout(()=>{        
            completeTask(task.taskId);
        },250);
        setIsOpen(!isOpen);
        //console.log(isOpen);
    }
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <div draggable="true" className={`taskView ${isOpen? "open" : ''}`}>
            <button type="button" className="taskCheckbox" onClick={onTaskComplete}>Done</button>
            <div className="taskTitle">{task.taskDescription}</div>
            <div className="taskDate">{task.taskDate}</div>
        </div>
    )
}
export default TaskView;