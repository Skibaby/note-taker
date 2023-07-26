const express = require('express');
const path = require('path')
const PORT = process.env.PORT ?? 3001;
const app = express();
const notes = require('./db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/notes', (req,res) => {
return res.sendFile(path.join(__dirname, 'public/notes.html'));
});

 app.get('/api/notes', (req,res) => {
    const noteData = fs.readFileSync('./db/db.json', 'utf8');
    const notes = JSON.parse(noteData);
    return res.json(notes);
 });

 app.post('/api/notes', (req,res) => {
    const noteData = fs.readFileSync('./db/db.json', 'utf8');
    const notes = JSON.parse(noteData);
    notes.push(req.body);
    const data = JSON.stringify(notes);
    fs.writeFileSync('./db/db.json', notes);
    return res.json('success');
 });

 app.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname, 'public/index.html'));
   

 app.listen(PORT, () => {
    console.log(`Application is running @ http://localhost:${PORT}`);
},


app.get('*' , (req, res) => {
    return res.sendFile(path.joint(__dirname, 'public/index.html'));
}),



)});