const config = require('../../config');
const repo = require("./repo/bookCrawlerRepo")
var db = require('../database/db');
var crawler = require('./tools/crawler');

db.connect(function (err) {
  if (err) {
    console.log('Unable to connect to MySQL.')

  } else {

  }
});

repo.getListBook().then((results) => {
  results.forEach(element => {
    crawler.getListBookDiscount(element.ID, element.Name).then((results) => {
      results.forEach(item => {
        // console.log(item)
        repo.insertBook(item).then()
      });
    })
  });
});