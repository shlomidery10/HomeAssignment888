
const redis = require("redis");
var client = redis.createClient();
client.on("error", function(error) {
  console.error(error);
});

function getContinentsValueRedis()
{
    return new Promise(function(resolve, reject) { 
    client.get('continents', function(err, reply) {
        resolve(reply);
    })
    })
}
function getContinentsRedis()
{
    return client.get("continents");
}

function setContinentsRedis(continents)
{
    client.set("continents", JSON.stringify(continents));
}

function getCountriesByContinentCodeRedis(code)
{
    return new Promise(function(resolve, reject) { 
    client.get(`ContinentCode_${code}`, function(err, reply) {
        resolve(reply);
    })
    })
}

function setCountriesByContinentCodeRedis(code,countries)
{
    client.set(`ContinentCode_${code}`, JSON.stringify(countries));
}
 module.exports ={getContinentsRedis,setContinentsRedis,getCountriesByContinentCodeRedis,setCountriesByContinentCodeRedis,getContinentsValueRedis}