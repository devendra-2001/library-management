const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: String,
    },
    book: {
        type: String
    },
    bookid: {
        type: String
    }
})

//collection
const Register = new mongoose.model("newlibrary", bookSchema);

module.exports = Register;