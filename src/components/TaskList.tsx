import EntryInput from "./TaskCreation";
import {useState} from 'react';
import TaskView from "./TaskView";
import { Task } from "./TaskView";

function TaskList(){
    const [taskList, setTasks] = useState<Task[]>([]);

    const handleOnClick = (data:Task) => {
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
                taskList.map((taskItem, i:number) => ( 
                    <TaskView key={i} task={taskItem} completeTask={handleTaskComplete}></TaskView>
                ))
            }
        </div>
    );

}

export default TaskList;