const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/librarymanagementsystem', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("connection successfully");
}).catch((e) => {
    console.log('no connection');
})