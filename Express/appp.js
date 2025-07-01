const express=require('express')

const app=express()

app.get('/',function(req,res){
    res.send('hellloooooo')
}).listen(3000,function(){
    console.log("app listning at port 3000")
})