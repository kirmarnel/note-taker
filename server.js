//Dependencies
const express = require('express');
const fs = require('fs'); 
//Set up server
const path = require('path');
const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML routes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));


//Api routes to write notes
app.post("/api/notes", (req, res) => {
    let newNote = req.body

    fs.readFile(path.join(__dirname, "./db/db.json"), (err, data) => {
        if (err) throw err;
        let noteInfo = JSON.parse(data)
        noteInfo.push(newNote)
    
        fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(noteInfo), (err, data) => {
            if (err) throw err;
            res.send()
        });     
    });   
});

//Api routes to get notes
app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"), (err, data) => {
        if (err) throw err;
        let noteInfo = JSON.parse(data)
        res.json(noteInfo)
        console.log(noteInfo)
    })
});




//Listen for server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));