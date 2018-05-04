const express = require('express');
const app = express();

const skill = require('./skill');
const code = require('./code');
const imgMap = require('./imgMap');

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/api/user', upload.array(), (req, res) => {
    console.log(req.body);
    res.json(JSON.stringify({
        'isMember': true,
        'username': req.body.username
    }));
});

app.get('/api/skill', (req, res) => {
    res.json(JSON.stringify(skill.data));
});

app.get('/api/code', (req, res) => {
    res.json(JSON.stringify(code.data));
});

app.get('/api/imgmap', (req, res) => {
    res.json(JSON.stringify(imgMap.data));
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost: ${app.get('port')} ; press Ctrl-C to terminate.`);
});