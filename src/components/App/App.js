import React, { useState } from 'react';
import swal from 'sweetalert';
import { Tasklist } from '../Tasklist/Tasklist';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  
  const handleClick = () => {
    if(task){
      if(tasks.every(taskObject => task !== taskObject.info)){
        let newId = id + 1;
        setTasks([...tasks, {id:newId, info: task}])
        setId(newId);
        setTask('')
      }
      else{
        swal('Task already exists.')
      }
    }
    else{
      swal('Error! Task cannot be empty.')
    }
  }

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleKeyPress = e => {
    if(e.which === 13){
      handleClick();
    }
  }
  
  const handleSubmit = e => {
    handleClick();
    e.preventDefault();
  }

  const deleteTask = taskId => {
    console.log(taskId)
    const newTasks = tasks.filter(task => {return task.id !== taskId})
    setTasks(newTasks);
  }

  return (
      <div className="App-body">
        <h1>Todo List</h1>
        <div>
          <div className="container" id="input-container">
            <input 
              type='text' 
              placeholder='Enter Task' 
              value={task} 
              onKeyPress={handleKeyPress} 
              onChange={handleChange} 
              className="input"/>
            <button onClick={handleClick} className="add-button button">
              <i className ="fa fa-plus icon"></i>
            </button>
          </div>
          <Tasklist 
            tasks={tasks} 
            handleClick={deleteTask}/>
          <div>
            {tasks.length ? 
                {tasks.length} Task{tasks.length !== 1 && 's'} Left to Complete : 
                No Tasks to Complete}
          </div>
        </div>
      </div>
    );
}


export default App;
