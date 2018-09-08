const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("We got a request and we will send an answer")
    res.send('<html><body><h1>Hello World</h1></body></html>')
})
app.get('/hi', (req, res) => {
    console.log("We got a request and we will send an answer")
    res.send('<html><body><h1>Hi there World</h1></body></html>')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
