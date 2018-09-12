
function log(req,res,next){
  console.log('Loging...');
  next();
};

function auth(req,res,next){
  console.log('Authenticating...');
  next();
};

module.exports = {log,auth};
