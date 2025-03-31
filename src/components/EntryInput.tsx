import {useState} from 'react';
interface EntryInputProps{
    onSendInput: (data:string) => string;
}

function EntryInput({onSendInput}:(EntryInputProps)){
    const [inputValue, setInput] = useState<string>('Enter your task description');
    const [firstInteraction, setFirstInteraction] = useState<boolean>(true);
    const handleButtonClick = (e:React.FormEvent)=>{   
        e.preventDefault();   
        onSendInput(inputValue);
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
            <form onSubmit={handleButtonClick} id='inputField'>
                <input type="text" className="taskDescription" value={inputValue} onClick={handleFirstInput} onFocus={handleFirstInput} onInput={e => setInput((e.target as HTMLInputElement).value)}></input>
                {/*<input type="button" className="createTask" value="Create" onClick={handleButtonClick}></input>*/}
                <button type="submit" className="createTask">Create</button>
            </form>
    );
}

export default EntryInput;