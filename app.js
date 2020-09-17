// import Express
const express = require('express');
const app = express();
//from dir config
const config = require('config');
//mongodb
const mongoose = require('mongoose');




// connect to MongoDB
async function start(){
    try {
       await mongoose.connect(config.get("mongoUri"), {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true
       });

       app.listen(PORT, () => {
        console.log(`App has been started on port ${PORT}...`);
    });
    } catch (e){
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start()

const PORT = config.get("port") || 5000;                        // if undefined, then port = 5000
//const port = 5000;
// app.listen(PORT, () => {
//     console.log(`App has been started on port ${PORT}...`);
// });

