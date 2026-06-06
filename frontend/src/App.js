import './App.css';
import Task from './components/Task'
import { useState,useEffect} from 'react';

function App() {
  const [msg,setmsg] = useState([])
  const [length,setl] = useState(0)
  
  async function getTask()
  {
    fetch("http://localhost:3300/").then(res => res.json())
    .then(data =>{setmsg(data)
      setl(data.length)
    })
    .catch(err=>console.log(err))
  }
  async function addTask(){
    const title = document.getElementById("Value").value
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
  useEffect(()=>{
    getTask()
  },[])
  return (
    <div id='Base'>
      <div id='inputTask'>
        <input type='text'id='Value' placeholder='Enter your Task'/>
        <button id='AddTask'onClick={addTask}>Add</button>
      </div>
      <div id='TaskCon'>
        
        {
        msg.map((m)=>(
           m?<Task Title={m.Title} key={m.id} Completed={m.Completed}/>:null
          ))
        }
      </div>
    </div>
    
  );
}

export default App;
