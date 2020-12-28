
const express = require('express');
const bodyParser=require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const studentRouter = require('./routes/route');


app.use('/api/user', studentRouter);

app.use(express.json());
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
