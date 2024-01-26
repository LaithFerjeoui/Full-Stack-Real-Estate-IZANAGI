import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import residencyRoute from './routes/residencyRoute.js';
dotenv.config()

const app= express ()

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cookieParser());
// Enable CORS
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
}
)
//Routes

app.use('/api/user', userRouter)
app.use('/api/residency', residencyRoute)
