var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.USER_KEY, { useNewUrlParser: true } );
mongoose.connection.once('open', function(){
    console.log('Movie conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});
mongoose.set('useCreateIndex', true);

var MovieSchema = new Schema({
    title: String,
    year: String,
    genre: String,
    actors: [{actorName: String, characterName: String}],
});

// return the model
module.exports = mongoose.model('Movie', MovieSchema);