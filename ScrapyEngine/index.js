const config = require("../config");
const repo = require("./bookRepo");
var db = require("./db");
var crawler = require("./crawler");
var util = require("./util")
var schedule = require('node-schedule');

db.connect(function(err) {
  if (err) {
    console.log("Unable to connect to MySQL.");
  } else {
  }
});

var j = schedule.scheduleJob({hour: 9, minute: 0}, function(){
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
});