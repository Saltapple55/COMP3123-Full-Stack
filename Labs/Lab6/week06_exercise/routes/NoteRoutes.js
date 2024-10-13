const noteModel = require('../models/NotesModel.js');

const express = require("express")

const routes = express.Router()
/*
//Get All notes
routes.get("/notes", (req, res) => {
    //get all notes 
    noteModel.find().then((notes)=>{
        res.send(notes)
    }).catch((err)=>{
        res.status(500).send({message: err.message})
    })
})

//Add NEW note
routes.post("/notes", async (req, res) => {

    const noteData = req.body
    console.log(noteData)
    try{
        const note = new noteModel(noteData)
        const newnote = await note.save()
        res.send(newnote)
    } catch(err){
        res.status(500).send({message: err.message})
    }
})

/*
 noteModel.findByIdAndUpdate(req.params.noteId, req.body, {new: true})
    .then((note) => {
        if(note) {
            res.send(note)
        } else {
            res.status(404).send({message: "note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
        

//Update existing note By Id
routes.put("/note/:noteId", (req, res) => {
    noteModel.findByIdAndUpdate(req.params.noteId)
    .then((note) => {
        if(note) {
            console.log('note updating')
            res.send(note)
        } else {
            res.status(404).send({message: "note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
})

//Delete note By ID-d
routes.delete("/note/:noteId", (req, res) => {
    noteModel.findByIdAndDelete(req.params.noteId)
    .then((note) => {
        if(note) {
            res.send(note)
        } else {
            res.status(404).send({message: "note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
})
})

*/


module.exports = routes
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const noteData = req.body
    try{
        const note = new noteModel(noteData)
        const newnote = await note.save()
        res.send(newnote)
    } catch(err){
        res.status(500).send({message: err.message})
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note

    noteModel.find().then((notes)=>{
        res.send(notes)
    }).catch((err)=>{
        res.status(500).send({message: err.message})
    })
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body) {

        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteId

    noteModel.findById(req.params.noteId).then((note)=>{
        if(note) {
            res.send(note)
        } else {
            res.status(404).send({message: "Note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
        })
    });
 


//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', (req, res) => {
    
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteId
    noteModel.findByIdAndUpdate(req.params.noteId,
         {noteTitle: req.body.noteTitle, 
            noteDescription: req.body.noteDescription,
             priority:req.body.priority,
              dateUpdated:Date.now()})
    .then((note) => {
        if(note) {
            
            res.send(note)
        } else {
            res.status(404).send({message: "note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', (req, res) => {
    if(!req.body) {

        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteId
    noteModel.findByIdAndDelete(req.params.noteId)
    .then((note) => {
        if(note) {
            res.send("note deleted")
        } else {
            res.status(404).send({message: "note not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
})
})
