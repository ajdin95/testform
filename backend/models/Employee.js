const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   role: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   subscribe: {
      type: Boolean
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)