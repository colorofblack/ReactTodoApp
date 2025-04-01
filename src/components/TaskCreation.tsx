import {useState} from 'react';
import { Task } from './TaskView';

interface EntryInputProps{
    onSendInput: (data:Task) => void;
}

function TaskCreation( {onSendInput} : (EntryInputProps) ){
    const [inputValue, setInput] = useState<string>('Enter your task description');
    const [firstInteraction, setFirstInteraction] = useState<boolean>(true);
    
    const handleSubmit = (e:React.FormEvent)=>{   
        e.preventDefault();  

        const taskData:Task={
            taskDescription: inputValue ,
            taskId:666,
            taskDate:"dayMonthYear",
        };
        
        onSendInput(taskData);
        console.log("Form submitted");

        ResetEntryField();
    }
    const handleFirstInput = ()=>{
        if( firstInteraction ){
            setInput('')
            setFirstInteraction(false);
        }
    }
    
    const ResetEntryField = ()=>{
        setInput('Enter your task description');
        setFirstInteraction(true);
    }

    return(
            <form onSubmit={handleSubmit} id='inputField'>
                <input type="text" className="taskDescription" value={inputValue} onClick={handleFirstInput} onFocus={handleFirstInput} onInput={e => setInput((e.target as HTMLInputElement).value)}></input>
                <button type="submit" className="createTask">Create</button>
            </form>
    );
}

export default TaskCreation;