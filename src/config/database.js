const mongoose = require('mongoose') // open mongo conection, create tables
mongoose.Promise = global.Promise // api promises mongoose use promises node (hide warning)
module.exports = mongoose.connect('mongodb://localhost/todo')