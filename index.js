const express = require('express')
require('dotenv').config()
const app = express()

// const port = 4000;
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
    console.log(`server listtening at ${process.env.PORT}`);
})