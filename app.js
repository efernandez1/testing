var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'aws-p-aud-targetpullrds02.cah11koidopd.us-east-1.rds.amazonaws.com',
  user     : 'readonly',
  password : 'r3@d0nly',
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.query('select count(*) as blah from auddef.ActionCount', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', JSON.stringify(results[0]));
  });

connection.end();