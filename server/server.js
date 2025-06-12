const express = require('express');
const databasesConection = require('./databases');
const bookRoutes = require('./routes/book_routes');
const cors = require('cors');
import 'dotenv/config'
// Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));
// databses connection
databasesConection();


const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Importing routes
app.get('/',(req,res)=>{
res.send('Welcome to the Book Store API');
});


app.use('/books',bookRoutes);


// Starting the server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});