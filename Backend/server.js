const express = require('express')
const cors = require('cors')
const app = express()

require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT

app.get("/",(req,res)=>{
    res.json({message:"hello React js"})
})




app.listen(port,()=>console.log(`server is running on post:${port}`))