import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoute.js'
// import punycode from 'punycode/punycode.js';

//app config
const PORT =process.env.PORT || 4000
const app=express()
await connectDB()

//initalize middleware
app.use(express.json())
app.use(cors())

//api routes

app.get('/',(req,res)=>res.send("api working chaithra"))

app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.listen(PORT, ()=> console.log(`Server running on port:${PORT}`));
 