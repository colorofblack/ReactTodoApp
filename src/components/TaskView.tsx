import EntryInput from "./EntryInput";
import {useState} from 'react';
import Task from "./Task";

function TaskView(){
    const [taskList, setTasks] = useState<string[]>([]);

    const handleOnClick = (data:string) => {
        setTasks([...taskList, data]);
        console.log("clicked, received: "+taskList);

        return data;
    };
    console.log('Rendering TaskView, handleOnClick:', handleOnClick); // Debug log

    return(
        <div>
            <EntryInput onSendInput={handleOnClick}/>        
            {
                taskList.map((task) => ( 
                    <Task taskDescription={task}></Task>
                )
                )
            }
        </div>
    );

}

export default TaskView;