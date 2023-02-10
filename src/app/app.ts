import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';

const app = express();
app.use(
    cors({
        origin: [
            /http:\/\/localhost:\d+/,
        ],
        credentials: true,
    }));
app.use(bodyParser.json()); // for parsing application/json
app.use(
    bodyParser.urlencoded({
        extended: true,
    }));
const router = express.Router();

router.get('/ping', function (req, res) { res.send('PONG!') });

router.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use('/', router);

http.createServer(app).listen(4002, () => {
    console.log('listening on port 4002');
});
