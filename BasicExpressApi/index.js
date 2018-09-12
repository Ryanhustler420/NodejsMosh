const Debug = require('debug')('app:debug');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const coursesRoutes = require('./routes/courses')
const homePage = require('./routes');
const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses',coursesRoutes);
app.use('/',homePage);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    Debug('Morgan enabled...');
}

var port = (process.env.PORT || 3000);
app.listen(port,() => {
  console.log(`Server is up and running on port ${port} ...`);
});
