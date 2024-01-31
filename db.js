//Red flag -> getting started with mongoose
var mongoose = require('mongoose');
const connectToMongo = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/projectbuddy');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("We are connected");
    })
}
module.exports = connectToMongo;


