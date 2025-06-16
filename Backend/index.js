import express from 'express'
import connectDB from './config/database.js';
import userRoutes from './routes/user.routes.js'

//database
connectDB()

const app = express()

//middleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/', userRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});