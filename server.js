const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const userController = require('./controllers/userController');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser')

require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'))

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // This allows the session cookie to be sent back and forth
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use('/', userController);

app.listen(process.env.PORT || 9000, () => {
  console.log('Your App Is Listening on Port 9000!')
});
