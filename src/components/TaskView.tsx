import { useState, useEffect, useRef} from "react";
interface TaskProps{
    task:Task;
    completeTask: (taskId:number) => void;
    position:number;
}
export interface Task{
    taskId:number;
    taskDescription:string;
    taskPosition:number;
    taskDate?:string;
    closed:boolean;
}


function TaskView({task, completeTask, position}:TaskProps ){  
    
    const taskElement = useRef<HTMLDivElement>(null);

   console.log(taskElement?.current?.getBoundingClientRect()?.height);
    const newOffset = (taskElement?.current?.getBoundingClientRect()?.height ?? 0) * (position);
    
    //setOffset(newOffset);
    console.log(task.taskDescription+" at Position: "+position +" | coordinate: "+taskElement.current?.getBoundingClientRect().y +" | calcOffset: "+newOffset);


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
        <div ref={taskElement} className={`taskView ${isOpen? "open" : ''}` } style={{top: `${newOffset}px`}}>

            <button type="button" className="taskCheckbox" onClick={onTaskComplete}>Done</button>
            <div className="taskTitle">{task.taskDescription}</div>
            <div className="taskDate">{task.taskDate}</div>
        </div>
    )
}
export default TaskView;