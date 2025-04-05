import TaskView from "./TaskView";
import { Task } from "./TaskView";
import { useRef, useState } from "react";

interface TaskListProp{
    taskList:Task[];
    onTaskComplete: (taskId:number)=> void
}
function TaskList({taskList, onTaskComplete}:TaskListProp){

    const [position, setPosition] = useState({x:0,y:0});

    const moveDivs =()=>{
        const newX = position.x + 100;
        const newY = position.y +50;
        setPosition({x:newX, y:newY});
        console.log(position);
    }

    const handleTaskComplete = (taskId:number) => {
        onTaskComplete(taskId);
  
    }
    const taskElements = useRef<HTMLDivElement>(null);

    if(taskElements){
        const taskItems = taskElements.current?.querySelectorAll('div.taskView');
        taskItems?.forEach((taskItem)=>{
            const taskItemDiv = taskItem as HTMLDivElement;
            taskItemDiv.style.transform = `translate(${position.x}px,${position.y}px`;
            console.log(taskItem.getBoundingClientRect());
        })
    }

    return(
        <div id="taskList" ref={taskElements}>
            <button onClick={moveDivs}>Move</button>

            {

                taskList.map((taskItem:Task) => ( 
                        <TaskView key={taskItem.taskId} task={taskItem} completeTask={handleTaskComplete}></TaskView>
                ))
            }
        </div>

    );

}

export default TaskList;