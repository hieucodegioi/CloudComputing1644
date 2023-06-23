const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"

const url = "mongodb+srv://hieuspagheti:hieu2172003@cluster0.jhwd2ew.mongodb.net/"
mongoose.connect(url);
const db = mongoose.connection;
db.on("error",console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('Connected to MongoDB');
});
require('./toy.model');
