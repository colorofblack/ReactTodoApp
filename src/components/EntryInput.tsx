interface EntryInputProps{
    data?:string;
    onSendInput: () => void;
}

function EntryInput({onSendInput}:EntryInputProps){
    console.log('Rendering EntryInput, onSendInput:', onSendInput); // Debug log

    const handleButtonClick = ()=>{
        console.log('Button clicked, calling onSendInput'); // Debug log

        onSendInput();
    }
    return(
        <div className="inputField">
            <input type="text" className="taskDescription"></input>
            <input type="button" className="createTask" value="Create" onClick={handleButtonClick}></input>
        </div>
    );
}

export default EntryInput;