const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//MongoDB connection PATH
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
});

mongoose.Promise = global.Promise;//Supresses a warning about promises.
mongoose.set('useCreateIndex', true); //Suppresses the warning about collection.ensureIndex


mongoose.set('useCreateIndex', true); //Suppresses the warning about collection.ensureIndex
app.use("/imageUploads", express.static('imageUploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Before any request is done we have to "disable" CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*') //second parameter specifies the url that can have access, no url means all can access.
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
next();
});

module.exports = app;
