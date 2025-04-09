import {useState} from 'react';
import { Task } from './TaskView';

interface EntryInputProps{
    onSendInput: (data:Task) => void;
}

function TaskCreation( {onSendInput} : (EntryInputProps) ){
    const [inputValue, setInput] = useState<string>('');
    const [firstInteraction, setFirstInteraction] = useState<boolean>(true); 

    const handleSubmit = (e:React.FormEvent)=>{   
        e.preventDefault();
        
        const addLeadingZero = (num:number) => num < 10 ? "0"+num.toString() : num.toString(); 
        const date:Date = new Date();
        const currentDate:string = addLeadingZero( date.getDate() ) +"/" +addLeadingZero( date.getMonth() + 1 ) +"/" +date.getFullYear();

        const taskData:Task={
            taskDescription: inputValue ,
            taskId:Date.now(),
            taskPosition:99,
            taskDate: currentDate,
            closed: false
        };
        onSendInput(taskData);
        console.log("Form submitted");

        ResetEntryField();
    }

    const handleFirstInput = ()=>{
        if ( firstInteraction ){
            //setInput('')
            setFirstInteraction(false);
        }
    }
    
    const ResetEntryField = ()=>{
        setInput('');
        setFirstInteraction(true);
    }

    return(
            <form onSubmit={handleSubmit} id='inputField'>
                <input type="text" className="taskDescription" placeholder="Enter your task description" value={inputValue} onClick={handleFirstInput} onFocus={handleFirstInput} onInput={e => setInput((e.target as HTMLInputElement).value)}></input>
                <button type="submit" className="createTask">Create</button>
            </form>
    );
}

export default TaskCreation;