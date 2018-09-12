const express = require('express');
const app = express();

app.get('/',(req,res) => {
  res.send('Hello World');
});

app.get('/api/courses',(req,res) => {
  res.send([1,2,3,4]);
});


// PORT
var port = (process.env.PORT || 3000);
// to manually assign port you can use terminal and type this command
// export PORT=5000, and you are good to go!

app.listen(port,() => {
  console.log(`Server is up and running on port ${port} ...`);
});
