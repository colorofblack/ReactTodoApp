import './App.css'
import Task from './components/Task.tsx';
import TaskView from './components/TaskView.tsx';

function App() {
  return (
    <>
    <h1>React To Do Application</h1>
      <TaskView/>
      <div>
        <Task taskDescription="My first Task" taskDate="Tag.Monat.Jahr"></Task>
      </div>
    </>
  )
}

export default App
