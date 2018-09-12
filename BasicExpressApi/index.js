const Debug = require('debug')('app:debug');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());


if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    Debug('Morgan enabled...');
}

const courses = [
  {id:1,name:'BBA'},
  {id:2,name:'BCA'},
  {id:3,name:'MBA'}
]

app.get('/',(req,res) => {
  // res.send('Hello World');
  res.render('index',{title:"My Express App",message:"Hello"});
});

app.get('/api/courses',(req,res) => {
  res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
  let result = courses.find(course => course.id === +req.params.id);
  if(!result) return res.status(404).send('Course not found!');
  res.send(result);
});


app.post('/api/courses',(req,res)=>{

  const { error } = validateCourse(req.body);

  if(error) return res.status(400).send(error.details[0].message);

  const course = {
    id:courses.length + 1,
    name: req.body.name
  }

  courses.push(course);
  res.send(course);
});

// updating
app.put('/api/courses/:id',(req,res) => {

  // Look up the course
  let result = courses.find(course => course.id === +req.params.id);

  // If not existing, return 404
  if(!result) return res.status(404).send('Course not found!');
  res.send(result);

  // Validation
  // const result = validateCourse(req.body);
  const { error } = validateCourse(req.body); //ressult.error

  // If invalid, return 400 - Bad request
  if(error) return res.status(400).send(error.details[0].message);

  // Update course
  result.name = req.body.name;

  // Return the updated course
  res.send(result);
});


// Deleting

app.delete('/api/courses/:id',(req,res)=>{
  // Look up the course
  let course = courses.find(course => course.id === +req.params.id);

  //Not exixting,return 404
  if(!course) return res.status(404).send('Course not found!');

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index,1);

  //Return the same course
  res.send(course);

});

function validateCourse(course){
  const schema = {
    name:Joi.string().min(3).required()
  };
  return Joi.validate(course,schema);
}

var port = (process.env.PORT || 3000);
app.listen(port,() => {
  console.log(`Server is up and running on port ${port} ...`);
});
