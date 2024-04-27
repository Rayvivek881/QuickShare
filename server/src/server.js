require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'), cors = require('cors');
const morgan = require('morgan');

const app = express(), PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));