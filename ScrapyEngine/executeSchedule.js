var schedule = require('node-schedule');

var j = schedule.scheduleJob({hour: 8, minute: 12}, function(){
  console.log('Time for work!');
});