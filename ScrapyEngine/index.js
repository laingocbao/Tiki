const config = require("../config");
const repo = require("./bookRepo");
var db = require("./db");
var crawler = require("./crawler");
var util = require("./util");
var cron = require('node-cron');

db.connect(function(err) {
  if (err) {
    console.log("Unable to connect to MySQL.");
  } else {
  }
});

cron.schedule('1 0 * * *', () => {
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
