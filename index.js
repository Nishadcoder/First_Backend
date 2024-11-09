require('dotenv').config()
const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Welcome To Twitter")
})
app.get('/login',(req,res)=>{
    res.send('<H1>HEllo, Nishad <H1/>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>NIshad Khalyani chai</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})