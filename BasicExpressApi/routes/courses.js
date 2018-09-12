const express = require('express');
const router = express.Router();


const courses = [
  {id:1,name:'BBA'},
  {id:2,name:'BCA'},
  {id:3,name:'MBA'}
]

router.get('/',(req,res) => {
  res.send(courses);
});

router.get('/:id',(req,res) => {
  let result = courses.find(course => course.id === +req.params.id);
  if(!result) return res.status(404).send('Course not found!');
  res.send(result);
});


router.post('/',(req,res)=>{

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
router.put('/:id',(req,res) => {

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

router.delete('/:id',(req,res)=>{
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

module.exports = router;
