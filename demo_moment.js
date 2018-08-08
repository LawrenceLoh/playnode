var moment = require('moment'); 

// From date to moment  
var d = new Date("01/01/1970 11:40:0:0");
var wrapped = moment();
console.log(wrapped); 

// From moment to date 
var date = wrapped.toDate(); 
date = wrapped.calendar();
console.log(date); 