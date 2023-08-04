const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('This webpage is working nicely..............')
  })
app.get('/version', function (req, res) {
  res.send('Serverless ci/cd v2!')
})

module.exports.handler = serverless(app);
