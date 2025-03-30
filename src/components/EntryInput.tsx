import {useState} from 'react';
interface EntryInputProps{
    onSendInput: (data:string) => string;
}

function EntryInput({onSendInput}:(EntryInputProps)){
    const [inputValue, setInput] = useState<string>('');
    const handleButtonClick = ()=>{      
        onSendInput(inputValue);
    }
    return(
        <div className="inputField">
            <input type="text" className="taskDescription" value={inputValue} onInput={e => setInput((e.target as HTMLInputElement).value)}></input>
            <input type="button" className="createTask" value="Create" onClick={handleButtonClick}></input>
        </div>
    );
}

export default EntryInput;