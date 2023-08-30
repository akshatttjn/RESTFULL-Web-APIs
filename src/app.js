// Importing the Express.js framework
const express = require('express');
const router=require('../src/routers/routes');

//navigating to parent directory
require('../src/db/dbconnect');
const MensRanking=require('../src/models/men');
// Creating an instance of the Express application
const app = express();

// Defining the port number for the server to listen on
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);


// // Defining a route handler for the root URL ("/")
// app.get("/", async (req, res) => {
//     // Sending a response with the text "Hi"
//     res.send("Hi");
// });



// Starting the Express server and listening on the specified port
app.listen(port, () => {
    // Logging a message to the console when the server starts
    console.log(`App started on port ${port}`);
});








// {
//     {
//     "ranking":1,
//     "name":"Akshat Jain",
//     "dob":"10 NOV 2001",
//     "country":"INDIA"
//     }
    
//     {
//     "ranking":3,
//     "name":"Usian Bolt",
//     "dob":"11 DEC 1998",
//     "country":"JAMAICA"
//     }
    
//     {
//     "ranking":2,
//     "name":"Sudhanshu",
//     "dob":"13 JAN 1999",
//     "country":"INDIA"
//     }
// }