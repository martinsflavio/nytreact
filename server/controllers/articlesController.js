const Articles  = require('../models/articleModel');


module.exports = {
  find (query, cb) {
    Articles.find(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  findById (query, cb) {
    Articles.findById(query, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  update (query, update, cb) {
    Articles.findByIdAndUpdate(query, update, {new: true}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  create (query, cb) {
    let entry = new Articles(query);

    entry.save((err, docs) => {
      this.errorHandler(err,docs, cb);
    })
  },
  destroy (query, cb) {

    Articles.findOneAndRemove({_id:query._id}, (err, docs) => {
      this.errorHandler(err,docs, cb);
    })

  },

  // ERROR HANDLER
  errorHandler (err, docs, cb)  {
    if (err) {
      return cb(err, null);
    } else {
      return cb(null, docs);
    }
  },
  controller: 'SavedArticles'
  /////////////////////////
};
