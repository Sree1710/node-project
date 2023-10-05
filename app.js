const express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const studentModel = require('./StudentModel')

var app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/studentDB?retryWrites=true&w=majority",{ useNewUrlParser: true})

app.post("/add",async(request,response)=>{
    let data=request.body
    const student=new studentModel(data)
    let result=await student.save()
    response.json(result)
})

app.get("/search",(request,response)=>{
   response.send("search student")
})

app.get("/delete",(request,response)=>{
  response.send("delete a student")
})

app.get("/view",(request,response)=>{
    response.send("view student")
})

app.listen(3001,()=>{
    console.log("Server is running")
})
