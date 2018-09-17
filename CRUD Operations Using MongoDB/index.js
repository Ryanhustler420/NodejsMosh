const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playgroundMosh', { useNewUrlParser: true })
.then(conn => {
    console.log(`connected with playgroundMosh Database`);
}).catch(err => console.log);

// defining schema

const courseSchema = new mongoose.Schema({
  name:String,
  author:String,
  tags:[String],
  date:{
    type:Date,default:Date.now
  },
  isPublished:Boolean
});


// now compile this into model
const Course = mongoose.model('Course',courseSchema);

const course = new Course({
  name:'Node.js Course',
  author: 'Gaurav',
  tags: ['node','backend']
  isPublished: true
});
