import './App.css';
import Task from './components/Task'
import { useState,useEffect} from 'react';

function App() {
  const [tasks,settask] = useState([])
  const [length,setl] = useState(0)
  
  async function getTask()
  {
    fetch("http://localhost:3300/").then(res => res.json())
    .then(data =>{settask(data)
      setl(data.length)
    })
    .catch(err=>console.log(err))
  }
  async function addTask(){
    let title = document.getElementById("Value").value
    if(title != "")
    {
      const res = await fetch("http://localhost:3300/addTask",{
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
      const data = await res.json()
      console.log(data)
      
      getTask()
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
