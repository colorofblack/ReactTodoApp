import EntryInput from "./EntryInput";

function TaskView(){

    const handleOnClick = () => {
        console.log("clicked");
    };
    console.log('Rendering TaskView, handleOnClick:', handleOnClick); // Debug log

    return(
        <EntryInput onSendInput={handleOnClick}/>
    );

}

export default TaskView;