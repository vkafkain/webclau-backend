require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3000;
const express = require('express');
const app = express();
const connectDB = require('./database/connectDB');
const routes = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser')

//Connect to database
connectDB();

//Middleware
app.use(cors({credentials: true, origin: 'http://localhost:5173'}))
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use('/uploads', express.static(__dirname +'/uploads'));

//Routes
app.use(routes);

app.get('/', function (req, res) {
  res.send('Server Up');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
