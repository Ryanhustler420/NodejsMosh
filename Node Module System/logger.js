const EventEmitter = require('events');

var url = 'http://clip.io/log';

class Logger extends EventEmitter{
    //method
    log(message){
        //Send an HTTP request
        console.log(message);

        this.emit('messageLogged',{id:1,url:"http://"});
    }    
}


module.exports = Logger;