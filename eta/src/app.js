const express = require('express')
const eta = require('eta')

app = express()

app.engine("eta", eta.renderFile)

app.set("view engine", "eta")

app.set("views", "./views")

app.all('/', (req, res) => {
    // console.log(req.query)
    res.render("index", req.query)
})

app.all('/app.js', (req, res) => {
    res.setHeader('content-type', 'application/js');
    res.sendFile(__filename)
})

app.listen(80)