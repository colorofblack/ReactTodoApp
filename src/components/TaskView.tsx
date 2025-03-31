import EntryInput from "./EntryInput";
import {useState} from 'react';
import Task from "./Task";

function TaskView(){
    const [taskList, setTasks] = useState<string[]>([]);

    const handleOnClick = (data:string) => {
        setTasks([...taskList, data]);
        console.log(data);
        //console.log("clicked, received: "+{taskList} +" List has length: "+{taskList});
        return data;
    };
    //console.log('Rendering TaskView, handleOnClick:', handleOnClick); // Debug log

    return(
        <div id="taskView">
            <EntryInput onSendInput={handleOnClick}/>        
            {
                taskList.map((task, i:number) => ( 
                    <Task key={i} taskId={200} taskDescription={task}></Task>
                ))
            }
        </div>
    );

}

export default TaskView;