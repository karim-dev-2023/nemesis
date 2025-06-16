// Mise en place coed express API
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get('/date',(req,res)=>{
    res.send(`Current date and time : ${new Date()}`);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
});