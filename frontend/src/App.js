import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [msg,setmsg] = useState("")
  useEffect(()=>{
    fetch("http://localhost:3300/").then(res => res.json())
    .then(data => setmsg(data.message))
    .catch(err=>console.log(err))
  },[])
  return (
   <h1>{msg}</h1>
  );
}

export default App;
