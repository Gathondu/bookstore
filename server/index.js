require('dotenv').config();
const express = require('express');
const cors = require('cors');

// import serverRender from './render';
import apiRouter from './apiRouter'

const app = express();

app.use(cors());
app.use(express.static('client'));
app.use('/api', apiRouter);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {content: '' //serverRender()
    });
});

var port = process.env.PORT
app.listen(port, () => console.log('Server up and running on port', port));
