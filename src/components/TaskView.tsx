import EntryInput from "./EntryInput";
import {useState} from 'react';
import Task from "./Task";
import { TaskProps } from "./Task";

function TaskView(){
    const [taskList, setTasks] = useState<TaskProps[]>([]);

    const handleOnClick = (data:TaskProps) => {
        setTasks([...taskList, data]);
        console.log(data);
        return data;
    };

    const handleTaskComplete = (taskId:number) => {
        console.log("Task Number "+taskId+" complete! Kill it with fire");
    }

    return(
        <div id="taskView">
            <EntryInput onSendInput={handleOnClick}/>        
            {
                taskList.map((task, i:number) => ( 
                    <Task key={i} taskId={task.taskId} taskDescription={task.taskDescription} taskDate={task.taskDate} completeTask={handleTaskComplete}></Task>
                ))
            }
        </div>
    );

}

export default TaskView;