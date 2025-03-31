import {useState} from 'react';
import { TaskProps } from './Task';

interface EntryInputProps{
    onSendInput: (data:TaskProps) => void;
}

function EntryInput( {onSendInput} : (EntryInputProps) ){
    const [inputValue, setInput] = useState<string>('Enter your task description');
    const [firstInteraction, setFirstInteraction] = useState<boolean>(true);
    
    const handleSubmit = (e:React.FormEvent)=>{   
        e.preventDefault();  

        const taskData:TaskProps={
            taskDescription: inputValue ,
            taskId:666,
            taskDate:"dayMonthYear",
            completeTask : ()=>{}
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

export default EntryInput;