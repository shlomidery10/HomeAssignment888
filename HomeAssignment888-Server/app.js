var cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
const port = 3000;
var httpfunctions = require('./http_functions');

app.get('/getCountriesByContinentCode',httpfunctions.getCountriesByContinentCode,(req,res,next)=>{
  res.send(res.locals.countries)
});

app.get('/getContinents',httpfunctions.getContinents,(req,res,next)=>{
  res.send(res.locals.continents)
});

//server runing and listen
app.listen(port, () => console.log(`Swimming Server listening on port ${port}!`))