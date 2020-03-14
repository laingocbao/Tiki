var mysql = require('mysql')
  , async = require('async');
const config = require('../../config');

var pool = null;

exports.connect = function (done) {
  pool = mysql.createPool({
    connectionLimit: 100,
    host: config.DATABASE.HOST,
    user: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    database: config.DATABASE.DATABASE_NAME
  })

  done()
}

exports.get = function () {
  return pool
}

exports.fixtures = function (data) {
  if (!pool) return done(new Error('Missing database connection.'))

  var names = Object.keys(data.tables)
  async.each(names, function (name, cb) {
    async.each(data.tables[name], function (row, cb) {
      var keys = Object.keys(row)
        , values = keys.map(function (key) { return "'" + row[key] + "'" })

      pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb)
    }, cb)
  }, done)
}

exports.drop = function (tables, done) {
  if (!pool) return done(new Error('Missing database connection.'))

  async.each(tables, function (name, cb) {
    pool.query('DELETE * FROM ' + name, cb)
  }, done)
}

exports.load = sql => {
  return new Promise((resolve, reject) => {
    pool.query(sql, function (error, rows, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(rows);
      }
      console.log('end connection database');
    });
  });
}

exports.save = sql => {
  console.log(sql);
  return new Promise((resolve, reject) => {
    pool.query(sql, function (error, value) {
      if (error) {
        reject(error);
      } else {
        console.log('\ngood', value);
        resolve(value);
      }

      // cn.end();
    });
  });
}

// this.connect(function (err) {
//   if (err) {
//       console.log('Unable to connect to MySQL.')
      
//   } else {
      
//   }
// })

// this.load('SELECT * FROM `Books`').then((results) => {
//   console.log('The solution is: ', results[0]); 
// });