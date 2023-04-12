const fs = require('fs');
const express = require('express');
const path = require('path');

const app=express();

const dirPath = path.join(__dirname,"timestamp");
const port = 2202;

app.use(express.static('timestamp'))

app.get('/',(req,res)=>{
    const time=new Date();
    const datestring = time.toUTCString().slice(0,-4);
    const timestamp = `Last created timestamp : ${datestring}`
    fs.writeFileSync(`${dirPath}/date-time.txt`,timestamp,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file generated");
        }
    })

    res.sendFile(path.join(__dirname,"timestamp/date-time.txt"));
})

app.listen(port,()=>console.log(`port started at : ${port}`));