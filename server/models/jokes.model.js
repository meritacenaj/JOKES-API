

const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
        setup: {
            type: String
        },
        punchLine: {
            type: String
        }
});
 
const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes;


