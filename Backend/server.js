const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()



app.use(express.static("../build"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../","build","index.html"))
})

const Task = JSON.parse(fs.readFileSync("../Task.json","utf-8"))



app.get("/getTask",(req,res)=>{
    
    res.json(Task)
})

app.listen(3001,()=>console.log("the server is runing on port 3001"))