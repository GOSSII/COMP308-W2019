const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => 
// res.send('Hello World!, DIpesh'))


app.get('/', (req, res) => 
res.sendFile("index.html",{ root: '.' }))


app.get('/about', function(req, res){
    res.send("About me");
    console.log("dd");
})

app.get('/about/index.html', function(req, res){
    res.send("Index page of About");
    console.log("dd");

})

app.get('/users/:id', (req,res) => {
    res.send(req.params);
});

app.get('/flights/:from-:to', (req,res) => {
    res.send(req.params);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))