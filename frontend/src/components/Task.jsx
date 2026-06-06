import { useState,useEffect } from "react";

function Task({Title,Completed}){
    const [completed,setcompleted] = useState(Completed)
    async function setTask(){

        
    }

    return(
        <div id="taskcon">
            <input type="checkbox" id="Checkbox" defaultChecked={completed} onChange={setTask}/>
            <p style={{textDecoration:completed?"line-through":"none"}}>{Title}</p>
        </div>

    )
}

export default Task;