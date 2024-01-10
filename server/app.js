const express = require('express');
const app = express();
const noteRoutes = require('./routes/note');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://samuelhans713:PqBQtT0y1Ab8UOZo@samuelhan-portfolio.nnqprkv.mongodb.net/?retryWrites=true&w=majority', {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/api', noteRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
