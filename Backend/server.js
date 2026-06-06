//Modules
const express = require('express')
const cors = require('cors')
const fs = require("fs")
const app = express()

require("dotenv").config()

//Files
const Tasks = JSON.parse(fs.readFileSync("./Task.json","utf-8"))

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
    
})




app.listen(port,()=>console.log(`server is running on post:${port}`))