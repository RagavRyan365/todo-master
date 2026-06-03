import './Component style/Task.css'
import { useState,useEffect } from 'react'

function Task(props){
    const [completed,settask] = useState(false)
    return(
        <div id='Taskcon'>
            <input type="checkbox" name="TaskComplete" id="TaskComplete" onChange={()=>settask(!completed)}/>
            <p id='Task' style={{textDecoration:completed ? "line-through":"none"}}>{props.text}</p>
            
        </div>
    )

}

export default Task;