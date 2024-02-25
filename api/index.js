import express from 'express';
// import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import weddingRouter from './routes/wedding.js';
import locationRouter from './routes/location.js';
import messageRouter from './routes/message.js';
import contactRouter from './routes/contact.js';
import rsvpRouter from './routes/rsvp.js';
import fileRouter from './routes/file.js';

dotenv.config();
// mongoose.connect(process.env.MONGODB_URI, { dbName: 'myfolio' })
//     .then(() =>{ console.log("Connected to DB");})
//     .catch((error)=> {console.log(error);});

const __dirname = path.resolve();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('server on! ' + port);
});

app.use('/api/wedding', weddingRouter);
app.use('/api/location', locationRouter);
app.use('/api/message', messageRouter);
app.use('/api/contact', contactRouter);
app.use('/api/rsvp', rsvpRouter);
app.use('/api/file', fileRouter);

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist, index.html'));
})

//=======================================================================

// const app2 = express();
// app2.use(express.json());

// app2.use(express.static(path.join(__dirname, 'client/dist')));
// app2.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

// app2.listen(4000, function () {
//     console.log('Server running on port 4000');
// });