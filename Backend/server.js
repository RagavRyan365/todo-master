//Modules
const express = require('express')
const cors = require('cors')
const fs = require("fs")
const app = express()

require("dotenv").config()

//Files
let Tasks = JSON.parse(fs.readFileSync("./Task.json","utf-8"))

//Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//envS
const port = process.env.PORT

app.get("/",(req,res)=>{
    res.json(Tasks)
})
app.post("/addTask",(req,res)=>{
    Tasks.push(req.body)
    console.log(req.body)
    fs.writeFileSync("./Task.json",JSON.stringify(Tasks,null,2),"utf-8")
    res.status(200).json({msg:"Task was added"})
})

app.put("/setTask/:id",(req,res)=>{
    const id = req.params.id
    const task = Tasks.find(u => u.id == id)
    if(!task){
        res.status(404).json({msg:"Task not found"})
    }
    else{
        task.Completed = !req.body.comp
        fs.writeFileSync("./Task.json",JSON.stringify(Tasks,null,2),"utf-8")
        res.status(202).json({msg:`Task updated`})
    }
    
})
app.delete("/removeTask/:id",(req,res)=>{
    try{
        const id = req.params.id
        Tasks = Tasks.filter(task => task.id != id)
        Tasks.map((task,index)=>task.id = index)
        fs.writeFileSync("./Task.json",JSON.stringify(Tasks,null,2),"utf-8")
        res.json({msg:"TAsk removed"})

    }catch(err){
        res.status(500).json(`internal servre error : ${err}`)
    }

})




app.listen(port,()=>console.log(`server is running on post:${port}`))