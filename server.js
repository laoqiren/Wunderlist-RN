const express = require('express');
const path = require('path');

const app = new express();
const port = 3000;
app.use(express.static(path.join(__dirname,'src')));

app.listen(port,err=>{
    if(err){
        return console.log('failed to listen port 3000');
    }
    console.log('good, app listened at port 3000!');
});