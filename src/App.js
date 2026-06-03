import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

//components
import Task from "./Components/Task"

function App() {
  const [tasks,settask] = useState([])
  /*useEffect(()=>{
    async function getTasks(){
      const res = await fetch("/getTask")
      const data = await res.json() 
      settask(data)
    }
    getTasks()
  },[])*/

  function addTask(){
    const tasktext = document.getElementById("taskvalue")
    settask([...tasks,tasktext.value])
    tasktext.value = ""
  } 

  return (
    <div id='Base'>
      <div id='maincon'>
        <div id='tasknav'>
          <input type='text'name='Task' id='taskvalue'placeholder='Enter the Task'/>
          <button id='addtask' onClick={addTask}>Add</button>
        </div>

        <div id='TaskLIst'>
          <ul>
            {tasks.map((text,index)=>(
              <li><Task text = {text}/></li>
            ))}
          </ul>
        </div>
        
        
      </div>

    </div>
  );
}

export default App;
