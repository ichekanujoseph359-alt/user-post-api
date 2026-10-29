const express = require('express');
const PORT = 3000;
const sequelize =require('./database/database')
const postRouter = require('./Router/postRouter')
const userRouter = require('./Router/UserRouter')
const app = express();

app.use(express.json())
app.use(postRouter)
app.use(userRouter)

const studentDB = async ()=> {
    try {
    await sequelize.authenticate()
    console.log('Database connected successfully')
} catch (error) {
    console.error('Unable to connect to database', error.message)
}
}

studentDB();

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})