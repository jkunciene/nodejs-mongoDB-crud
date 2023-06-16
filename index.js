require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();
app.use(express.json());

const { 
    createUser,
    getUsers,
    getUserByName,
    getUserById 
} = require('./controllers/userController');


app.post('/api/user', createUser);
app.get('/api/user/:id', getUserById);
app.get('/api/users', getUsers);
app.get('/api/userbyname', getUserByName);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});

