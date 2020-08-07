const fetch = require("node-fetch");
var redisfunctions = require('./redis_functions');
var logic=require('./logic.js');

function getCountriesByContinentCode(req,res,next)
{
  redisfunctions.getCountriesByContinentCodeRedis(req.query.code).then(countriesValue=>{
    if (countriesValue) {
      res.locals.countries=JSON.parse(countriesValue);
      next();
    }
else{
  fetchCountriesByContinentCode(req,res,next).then(result => {
    return result.json();
  }).then(data => {
    redisfunctions.setCountriesByContinentCodeRedis(req.query.code,data.data.continent.countries);
   res.locals.countries=data.data.continent.countries;
   next();
 });
}
});
}

function getContinents(req,res,next) {
  if (redisfunctions.getContinentsRedis()) {
    redisfunctions.getContinentsValueRedis().then(continentsValue=>{
        if (res) {
          res.locals.continents=JSON.parse(continentsValue);
          next();
        }
  });
}
  else{
  fetchContinents().then(result => {
           return result.json();
         }).then(data => {
          redisfunctions.setContinentsRedis(data.data.continents);
          if (res) {
            res.locals.continents=data.data.continents;
            next();
          }
        });
    }
  }
  

function fetchContinents()
{
 return fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": "<access-token>"
        },
        body: JSON.stringify({
          query: `
          {
            continents{
              code
              name
            }
          }
          `
        })
      })
}

function fetchCountriesByContinentCode(req,res,next) {
  return fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": "<access-token>"
      },
      body: JSON.stringify({
        query: `
        {
          continent (code:"${req.query.code}") {
            countries{
              code
              name
              phone
              capital
              currency
              languages{
                name
              }
            }
            }
          }
        `
      })
    })
}

function poolContinentsFromGraphQL() {
  if (redisfunctions.getContinentsRedis()) {
    fetchContinents().then(res=>{return res.json()}).then(data=>{
      redisfunctions.getContinentsValueRedis().then(continentsValue=>{
        if (logic.compareTwoObjects(JSON.parse(continentsValue),data.data.continents)) {
          return
        }
        else{redisfunctions.setContinentsRedis(data.data.continents);}
        });
      });
  }
  else{getContinents();}
    setTimeout(function() {  poolContinentsFromGraphQL(); }, 9000);
  }
poolContinentsFromGraphQL();

    module.exports ={
        getCountriesByContinentCode,getContinents,fetchContinents
    }