const config = require("../config");
const repo = require("./bookRepo");
var db = require("./db");
var crawler = require("./crawler");
var util = require("./util")

db.connect(function(err) {
  if (err) {
    console.log("Unable to connect to MySQL.");
  } else {
  }
});

function intervalFunctionGetData() {
  console.log(util.getDateTime())
  repo.getListBook().then(results => {
    results.forEach(element => {
      crawler.getListBookDiscount(element.ID, element.Name).then(results => {
        results.forEach(item => {
          // console.log(item)
          repo.insertBook(item).then();
        });
      });
    });
  });
}

setInterval(intervalFunctionGetData, config.time_interval);

// function callAtSpecificTime (atTheTime, yourcode) {
//     var now = new Date(),
//         start,
//         wait;

//     if (now.getHours() < (atTheTime - 1)) {
//         start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), atTheTime, 0, 0, 0);
//     } else {
//         start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, atTheTime, 0, 0, 0);
//     }

//     wait = start.getTime() - now.getTime();
//     console.log(wait)
//     if(wait <= 0) { //If missed 8am before going into the setTimeout
//         console.log('Oops, missed the hour');
//         callAtSpecificTime(yourcode); //Retry
//     } else {
//         setTimeout(function () { //Wait 8am
//             setInterval(function () {
//                 yourcode();
//             }, 86400000); //Every day
//         },wait);
//     }
// }

// var yourcode = function () {
//         console.log('This will print evryday at 8am');
//     };
// callAtSpecificTime(22, yourcode);

