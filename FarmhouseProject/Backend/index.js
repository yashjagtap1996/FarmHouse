import express from 'express'
import cors from 'cors'
import connectDB from './config/database.js'
import  contactDetailsRoutes from './routes/contactDetails.routes.js'



connectDB();
const app = express()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/contact',contactDetailsRoutes)

const PORT = process.env.PORT

app.listen(PORT,()=>{
console.log(`Server runnng on port ${PORT}`);
})