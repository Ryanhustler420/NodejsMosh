const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors:[authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}


async function updateAuthor(courseId){
    const course = await Course.update({_id:courseId},{
        $set:{
            'author.name':'SauravGupta'
        }
    });
}

async function addAuthor(courseId,author){
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

// createCourse('Nodejs Course',[
//     new Author({ name: 'Gaurav' }),
//     new Author({ name: 'Ask' })
// ]);


async function removeAuthor(courseId,authorId){
    const course = await Course.findById(courseId);
    let author = course.authors.id(authorId);
    author.remove();
    course.save();
}


removeAuthor('5ba3304685e6980194409e2d','5ba330f60b60cf39648b5d3e')

// addAuthor('5ba3304685e6980194409e2d', new Author({name:'Amy'}))
