import { useState,useEffect } from "react";
import{ReactComponent as Delete} from "../Static/trash.svg"

import './Task.css'

function Task({Title,Completed,loadTask,id}){
    //const [completed,setcompleted] = useState(Completed)
    async function setTask(){
        const res = await fetch(`http://localhost:3300/setTask/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                comp:Completed
            })
        })
        const d = await res.json()
        console.log(d)
        loadTask()
        
    }
    async function removeTask()
    {
        const res = await fetch(`http://localhost:3300/removeTask/${id}`,{
            method:"DELETE"
        })
        const d = await res.json()
        console.log(d)
        loadTask()
    }

    return(
        <div id="taskcon">
            <input type="checkbox" id="Checkbox" defaultChecked={Completed} onChange={setTask}/>
            <p style={{textDecoration:Completed?"line-through":"none"}}>{Title}</p>
            <button onClick={removeTask}><Delete/></button>
        </div>

    )
}

export default Task;