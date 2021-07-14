const express = require("express");
const fs = require('fs');
const path = require("path");
const { render } = require("pug");
const port = process.env.PORT || 80;
const app = express();
const bosyparser = require('body-parser');
const router = express.Router();


//define schema
require('./db/conn');
const stdModel = require("./models/registers");
app.use(express.json());
// var student = stdModel.find({ id: 1376 });

//bootstrap
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/bootstrapjs', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));

// for serving static files
app.use("/static", express.static('static'));
app.use(express.urlencoded({ extended: false }));
// pug setup
app.set('view engine', 'pug'); // set the template engien as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

//End points
app.get('/', (req, res) => {
    // const params=
    res.status(200).render('index.pug', { title: "" });
})
app.get('/takebook', (req, res) => {
    // const params=
    res.status(200).render('takebook.pug', { title: "" });
})
app.post('/takebook', async (req, res) => {
    try {
        const mydata = new stdModel({
            name: req.body.name,
            id: req.body.id,
            book: req.body.book,
            bookid: req.body.bookid
        })
        const registered = await mydata.save();
        res.status(201).render('takebook.pug', { title: "" });
    } catch (error) {
        res.status(400).send(error + "this is already exist");
    }
})
app.post('/about', async (req, res) => {
    let id = req.body.id
    student = stdModel.find({ id: id });
    student.exec(function (err, data) {
        if (err) throw err;
        res.status(200).render('index1.pug', { name: req.body.name, records: data, class: "tableactive" });
    })
})
app.get('/about', (req, res) => {
    res.status(200).render('index1.pug', { name: "username", records: "", class: "" });
})

app.get('/contact', (req, res) => {
    // const params=
    res.status(200).render('contact.pug');
})


app.listen(port, (req, res) => {
    console.log(`application start at port ${port}`);
})