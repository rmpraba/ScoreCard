var express    = require("express");
 var mysql      = require('mysql');
 var email   = require("emailjs/email");
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'admin',
   database : 'transport'
 });
var bodyParser = require('body-parser');
 var app = express();

app.use(express.static('app'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
   res.sendFile("app/index.html" );
})


app.post('/getroute' ,  urlencodedParser,function (req, res)
{
    var schoolx={"school_id":req.query.schol};
      connection.query('select * from route where ?',[schoolx],
        function(err, rows)
        {
        if(!err)
    {
      if(rows.length>0)
      {
        //console.log(rows);
      res.status(200).json({'returnval': rows});
      }
      else
      {
      res.status(200).json({'returnval': 'invalid'});
      }
    }
    else
    {
      console.log('No data Fetched'+err);
    }
});
  });







function setvalue(){
  console.log("calling setvalue.....");
}
var server = app.listen(8083, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
});