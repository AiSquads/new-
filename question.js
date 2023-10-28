const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

app.set('views',__dirname+'/public');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.use(express.static('public'));

const conn=mongoose.connection;

conn.once('open',function(req,res){
console.log('successful connection')
})


mongoose.connect('mongodb://0.0.0.0/full',{
    useNewUrlParser: true, useUnifiedTopology :true

})

const userSchema = new mongoose.Schema({

});

const blix = mongoose.model('infos', userSchema);

app.use(bodyparser.urlencoded({ extended: true }));
