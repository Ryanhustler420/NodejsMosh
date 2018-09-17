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
    type:Date,
    default:Date.now
  },
  isPublished:Boolean
});


// now compile this into model
const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
  const course = new Course({
    name:'Angular Course',
    author: 'Gaurav',
    tags: ['angular','frontend'],
    isPublished: true
  });

  const result = await course.save();
  console.log(result);
}

// createCourse();

async function getCourses(){

  // Compairison Operator
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // ite (less than or equal to)
  // in
  // nin (non in)

  // or
  // and

  const courses = await Course
  // .find({name:'Node.js Course,',isPublished:true})
  // .find({price:{ $gt: 10 , $lte: 20}})
  // .find({price:{ $in:[10,15,20] }})
  .find()
  .or([{author:"GauravGupta"},{ isPublished: true}])
  // .and([ ])
  .limit(10)
  .sort({name: 1})
  .select({name:1,tags:1});
  console.log(courses);
}

getCourses();


