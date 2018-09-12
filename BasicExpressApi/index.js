const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send('Hello World');
});

app.get('/api/courses',(req,res) => {
  res.send([1,2,3,4]);
});

// /api/courses/1
app.get('/api/courses/:id/:year',(req,res) => {

  // http://localhost:5000/api/courses/2/2018?sortBy=name
  // res.send(req.params);
  // {
  //   "id": "2",
  //   "year": "2018"
  // }

  //http://localhost:5000/api/courses/2/2018?sortBy=name
  // res.send(req.query);
  // {
  // "sortBy": "name"
  // }

});

// PORT
var port = (process.env.PORT || 3000);
// to manually assign port you can use terminal and type this command
// export PORT=5000, and you are good to go!

app.listen(port,() => {
  console.log(`Server is up and running on port ${port} ...`);
});
