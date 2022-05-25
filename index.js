const express = require('express')
const path = require('path')

let app = express()
const listen = process.env.PORT || 3200

app.use(express.static(path.join(__dirname, '/assets')));
// app.use(express.static(path.join(__dirname, '/vendor')));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index')
})



// server.secure(credentials)
app.listen(listen, function() {
    console.log('server is up')
})