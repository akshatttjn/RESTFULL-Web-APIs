// Importing the Mongoose library for MongoDB connectivity
const mongoose = require('mongoose');

// Connecting to the MongoDB Atlas cluster using the provided connection string
mongoose.connect("mongodb+srv://admin-akshat:Khandala-1@cluster0.ztou0.mongodb.net/olympics", {
    useNewUrlParser: true,        // Use the new URL parser
    useUnifiedTopology: true     // Use the new server discovery and monitoring engine
}).then(() => {
    // If the connection is successful, log a success message
    console.log("Database successfully connected with Express server");
}).catch((e) => {
    // If there's an error during connection, log an error message
    console.log("Database not connected with Express App");
});
