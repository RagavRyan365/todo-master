import './App.css';
import Task from './components/Task'
import { useState,useEffect} from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [tasks,settask] = useState([])//task variable
  const [length,setl] = useState(0)//length variable used for adding a new task
  
  //To get the tasks from the Task.json file via backend
  async function getTask()
  {
    fetch(`${BACKEND_URL}/`).then(res => res.json())
    .then(data =>{
      //assigning the data from the Task.json file to the variable tasks via the response from backend
      settask(data)
      //Assigning the length of the json file to the length variable
      setl(data.length)
    })
    .catch(err=>console.log(err))
  }

  //To add a new task
  async function addTask(){
    const title = document.getElementById("Value").value
    if(title !== "")//Checking the title or the task input field does not contain null value
    {
      const res = await fetch(`${BACKEND_URL}/addTask`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          id:length,
          Title:title,
          Completed:false
        })
      })
      
      getTask()//Calling again this function to refresh the page and render the new task added
    }
  }
  useEffect(()=>{
    getTask()
  },[])
  
  return (
    <div id='base'>
      <h1>Todo-Master</h1>
      <div id='con'>
        <form id='inputTask'>
          <input type='text'id='Value' placeholder='Enter your Task'/>
          <button type='submit' id='AddTask'onClick={addTask}>Add</button>
        </form>
        <div id='TaskCon'>

          {
          tasks.map((task)=>(
             task?<Task Title={task.Title} key={task.id} Completed={task.Completed} loadTask={getTask} id={task.id}/>:null
            ))
          }
        </div>
      </div>
    </div>
    
  );
}

export default App;
