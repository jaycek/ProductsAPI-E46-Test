const express = require('express')
const mongoose = require('mongoose')
const productRouter =require('./routers/productRouter')
const userRouter =require('./routers/userRouter')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const cors =require('cors')

const app=express()
app.use(cors())
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use(express.json())


app.use('/products',productRouter)
app.use('/users',userRouter)

const MONGODB_URL = process.env.MONGODB_URL
const port = process.env.PORT
async function main() {
    await mongoose.connect(MONGODB_URL);
  
  }

main()
.then(()=>console.log("Database connected"))
.catch(err => console.log(err));

const ProductData = require('./models/product')


app.listen(port,()=>{
    console.log("Server started")
})