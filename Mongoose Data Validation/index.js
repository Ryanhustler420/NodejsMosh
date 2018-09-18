const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playgroundMosh', { useNewUrlParser: true })
.then(conn => {
    console.log(`connected with playgroundMosh Database`);
}).catch(err => console.log);

// defining schema

const courseSchema = new mongoose.Schema({
  name:{type:String,
     required:true,
     minlength:5,
     maxlength:255
     // match:/patter/
    },
  category:{
    type: String,
    required: true,
    enum:['web','mobile','network']
  },
  author:String,
  tags:{
    type:Array,
    validate:{
      validator: function(v){
        return v && v.length > 0;
      },
      message: ' A course should have atleast one tag'
    }
  },
  date:{
    type:Date,
    default:Date.now
  },
  isPublished:Boolean,
  price:{
    type:Number,
    required: function() { return this.isPublished },
    min: 10,
    max:200
  }
});


// now compile this into model
const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
  const course = new Course({
    name:'Angular Course',
    category:'-',
    author: 'Gaurav',
    tags: ['angular','frontend'],
    isPublished: true,
    price:15
  });
  try{
    // course.validate((err) => {
    //   if(err) { }
    // });

    const result = await course.save();
    console.log(result);
  
  }catch(e){
    console.log(e.message);
  }
}

createCourse();

async function getCourses(){

  const pageNumber = 2;
  const pageSize = 10;

  // /api/courses?pageNumber=2&pageSize=10

  const courses = await Course
  .find({name:'Node.js Course,',isPublished:true})
  .skip((pageNumber - 1) * pageSize)
  .limit(pageSize)
  .sort({name: 1})  
  .select({name:1,tags:1});
  console.log(courses);
}

// getCourses();


async function updateCourse(id){
  const result = await Course.updateOne({_id:id},{
    $set:{
      author:'Gaurav',
      isPublished: false
    }
  });
  console.log(result);
}

// updateCourse('5b9f6ac2c5660f283875a90d');


async function removeCourse(id){
 const result = await Course.deleteOne({ _id:id})
 console.log(result);
}

// removeCourse('5b9f6ac2c5660f283875a90d');

