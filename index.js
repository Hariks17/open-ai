const path = require('path')
const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/openai',require('./routes/openaiRoutes'))
app.listen(PORT,()=>{console.log('Apps Running Successfully in PORT ',PORT)})