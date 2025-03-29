
function Task({taskDescription="taskDescription", taskDate="Day/Month/Year"} ){    return(
        <div className="taskItem">
            <input type="checkbox" className="taskCheckbox"></input>
            <div className="taskTitle">{taskDescription}</div>
            <div className="taskDate">{taskDate}</div>
        </div>

    )
}
export default Task;