const mongoose=require('mongoose')
const studentModel=mongoose.model("students",mongoose.Schema(
    {   
        name:String,
        rollno:String,
        admno:String,
        colg:String
    }
    
))
module.exports=studentModel