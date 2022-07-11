var express = require('express');
var router = express.Router();
const axios = require("axios");
const {apiConfig} = require('../config/config');
const _ = require('lodash');
const redisClient = require('../lib/redis');
/* GET home page. */
router.get('/search', async function(req, res, next) {
  const data = await redisClient.withCache('apiData', async ()=>{
      const httpClient = axios.create({
    });
    

  try {
      let response  = await httpClient.get(`${apiConfig.apiUrl}${req.query.lang || 'nl'}/collection?key=${apiConfig.key}`);
      
      response.data.artObjects = response.data.artObjects.map(artObject => {
        const artObjectDetailsResponse = await httpClient.get(artObject.links.self);
        artObject= {...artObject, ...artObjectDetailsResponse.data.artObject};
        return artObject;
      })

    }
    catch(error){
      return null
    }
  }
  );

  return data?res.status(200).send(JSON.parse(data)):res.status(404);
});

module.exports = router;
