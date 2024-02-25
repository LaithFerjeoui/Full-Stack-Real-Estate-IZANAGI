import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import residencyRoute from './routes/residencyRoute.js';
import mongoose from "mongoose";
dotenv.config()

const app= express ()


const PORT = process.env.PORT || 3000;

// Connexion à la base de données
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, 
    );
    console.log("MongoDB database is connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Arrête le processus en cas d'échec de connexion
  }
};

app.use(express.json())
app.use(cookieParser());
// Enable CORS
app.use(cors());

//Routes

app.use('/api/user', userRouter)
app.use('/api/residency', residencyRoute)

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`)
}
)
