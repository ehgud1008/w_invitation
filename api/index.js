import express from 'express';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI, { dbName: 'myfolio' })
    .then(() =>{ console.log("Connected to DB");})
    .catch((error)=> {console.log(error);});

const __dirname = path.resolve();

const app = express()
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('server on! ' + port);
});