const mongoose = require('../db/mongoDB');

const ArticleSchema = new mongoose.Schema({
  title:{
    type: String,
    require: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    require: true
  }

});


module.exports = mongoose.model('SavedArticles', ArticleSchema);