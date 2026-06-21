import { useEffect } from "react";
import{ReactComponent as Delete} from "../Static/trash.svg"

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

import './Task.css'

function Task({Title,Completed,loadTask,id}){
    async function setTask(){
        const res = await fetch(`${BACKEND_URL}/setTask/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            }
        })
        loadTask()
        
    }
    async function removeTask()
    {
        const res = await fetch(`${BACKEND_URL}/removeTask/${id}`,{
            method:"PUT"
        })
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