var express = require('express')
var moment= require ("moment");
var router = express.Router();
const app=express();
const h =moment().format("HH");
 
// app.use(function (req, res, next) {
//   res.send('Time:', Date.now());
//   next();
// });

  

router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/viwes/home.html')
  next();
})

  if (h <7 && h>18){
   app.get('/*', (req, res) => {
  res.send('Our office is not open now');
 });
    
  } else{
 
    app.get('/ourservices',  (req, res) => { 
      res.sendFile(__dirname + '/viwes/home.html')
  });
  app.get('/',  (req, res) => { 
    res.sendFile(__dirname + '/viwes/ecom.html')
});
app.get('/contact',  (req, res) => { 
    res.sendFile(__dirname + '/viwes/index.html')
});
app.get('/home',  (req, res) => { 
  res.sendFile(__dirname + '/viwes/ecom.html')
  
});
}

  app.listen(3000);