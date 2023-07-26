const router = require('express').Router();
//const notes = require('./db/db.json');
//const router = require('./routes');
const path = require('path')
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

console.log('DIRNAME', __dirname);

router.get('/notes', (req,res) => {
  return res.sendFile(path.join(__dirname, '..public/notes.html'));
  });
  
   router.get('/api/notes', (req,res) => {
      const noteData = fs.readFileSync(path.join(__dirname,'../db/db.json', 'utf8'));
      const notes = JSON.parse(noteData);
      return res.json(notes);
   });
  
   router.post('/api/notes', (req,res) => {
      const noteData = fs.readFileSync(path.join(__dirname, '../db/db.json', 'utf8'));
      const notes = JSON.parse(noteData);
      notes.push({ ...req.body, id: uuidv4() });
      const data = JSON.stringify(notes);
      fs.writeFileSync('../db/db.json', notes);
      return res.json('success');
   });
  
   router.delete('/api/notes/:id', (req,res) => {
      const noteData = fs.readFileSync(path.join(__dirname, '../db/db.json', 'utf8'));
      const notes = JSON.parse(noteData);
      const filteredNotes = notes.filter((note) => note.id !== req.params.id);
      const data = JSON.stringify(filteredNotes);
      fs.writeFileSync('../db/db.json', notes);
      return res.json('success');
   });
   router.get('*', (req,res) => {
      return res.sendFile(path.join(__dirname, '..public/index.html')
   )});

   module.exports = router; 