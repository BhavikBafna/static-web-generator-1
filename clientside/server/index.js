const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
const routesUrl = require('./router/routes');

// const axios = require("axios");


dotenv.config();
mongoose.connect("mongodb+srv://AyushWal03:AyushWal03@cluster0.e2ogqbz.mongodb.net/mini_project?retryWrites=true&w=majority",()=>console.log("Data base is connected!!"));
app.use(cors());
app.use(express.json());
app.use('/app',routesUrl)





// app.use('/',(req,res)=>{
//     res.send('bhadwe tu server pr hai');
// })
app.listen(port,()=>{
   console.log(`server running on port http://localhost:${port}`)}  
    );
    