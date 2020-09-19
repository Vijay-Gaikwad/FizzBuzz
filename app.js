const express = require('express');
const http = require('http');
const https = require('https');
const port = 3002;
let isHttpsOn = false;
const printNo = require('./routes/entities/print-no-on-new-line/index');
const printFizz = require('./routes/entities/print-fizz/index');
const printBuzz = require('./routes/entities/print-buzz/index');
const printFizzBuzz = require('./routes/entities/print-fizzbuzz/index');

let app = express();

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, X-Session-Id, X-App-version, X-Target-Client, X-Origin-Domain, X-Dev-Mode');

    if ('GET' == req.method) {
        res.header('Cache-Control', 'no-cache');
    }

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.use(allowCrossDomain);
app.set('view engine', 'ejs');

if (isHttpsOn) {
    let httpsServer = https.createServer(app);
    httpsServer.listen(process.env.PORT || port, () => {
        console.log(`Example app listening at https://localhost:${port}`)
    })
} else {
    let httpServer = http.createServer(app);
    httpServer.listen(process.env.PORT || port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

app.get('/api/v1/print-no-on-new-line/:no', printNo.printNoOnNewLine);
app.get('/api/v1/print-fizz/:no', printFizz.printFizz);
app.get('/api/v1/print-buzz/:no', printBuzz.printBuzz);
app.get('/api/v1/print-fizzbuzz/:no', printFizzBuzz.printFizzBuzz);
app.get('/', (req, res) => {
    res.send('Welcome to FizzBuzz App.')
})

