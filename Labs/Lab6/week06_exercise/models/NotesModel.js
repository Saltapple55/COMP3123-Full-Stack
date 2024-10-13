const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
    },
    noteDescription: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum:['HIGH', 'MEDIUM', 'LOW']
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
        default: Date.now()
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
