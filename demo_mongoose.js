var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    var kittySchema = mongoose.Schema({
        name: String
      });

      kittySchema.methods.speak = function () {
        var greeting = this.name
          ? "Meow name is " + this.name
          : "I don't have a name";
        console.log(greeting);
      }
      
      var Kitten = mongoose.model('Kitten', kittySchema);
      var silence = new Kitten({ name: 'mimi' });
      silence.save(function (err, fluffy) {
        console.log('-----------------------------------------');
        if (err) return console.error(err);
        fluffy.speak();
      });

      Kitten.find(function (err, kittens) {
      console.log('-----------------------------------------');
        if (err) return console.error(err);
        console.log(kittens);
      })
});

