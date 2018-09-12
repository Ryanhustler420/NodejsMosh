const express = require('express');
const app = express();

// Middleware for parsing json data from client side
app.use(express.json());

const courses = [
  {id:1,name:'BBA'},
  {id:2,name:'BCA'},
  {id:3,name:'MBA'}
]


app.get('/',(req,res) => {
  res.send('Hello World');
});

app.get('/api/courses',(req,res) => {
  res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
  let result = courses.find(course => course.id === +req.params.id);
  if(!result) res.status(404).send('Course not found!');
  res.send(result);
});


app.post('/api/courses',(req,res)=>{
  const course = {
    id:course.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
});


var port = (process.env.PORT || 3000);
app.listen(port,() => {
  console.log(`Server is up and running on port ${port} ...`);
});
