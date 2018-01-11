const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//models will be the structures for how the data will be organized
//Each company would have their own profile with their own information
const companySchema = mongoose.Schema({ //definitely inccomplete, but we'll talk about this more
  name: String,
  type: String, //for now, this will be water for everybody
  location: String, 
});

mongoose.model('Company', placeSchema);

mongoose.connect('mongodb://localhost', {useMongoClient: true});