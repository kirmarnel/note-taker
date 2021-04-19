//Dependencies
const express = require('express');
const fs = require('fs'); 
//Set up server
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
//HTML routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

//Api routes to write notes
app.post('/api/notes', (res, req)=> {
    console.log(req.body)

    
    res,end();
})
//Api routes to get notes




//Listen for server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));