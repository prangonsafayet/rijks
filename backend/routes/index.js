var express = require('express');
var router = express.Router();
const axios = require("axios");
const {apiConfig} = require('../config/config');
const _ = require('lodash');
const redisClient = require('../lib/redis');
/* GET home page. */
router.get('/search', async function(req, res, next) {
  const lang = req.query.lang || 'nl';
  const data = await redisClient.withCache(lang+'_apiData', async ()=>{
      const httpClient = axios.create({});
      
  try {
    console.log(`${apiConfig.apiUrl}${lang}/collection?key=${apiConfig.key}`);
      let response  = await httpClient.get(`${apiConfig.apiUrl}${lang}/collection?key=${apiConfig.key}`);
      return response.data

    }
    catch(error){
      return null
    }
  }
  );
  return data?res.status(200).send(data):res.status(404);
});
router.get('/get', async function(req, res, next) {
  if(!req.query.obj_id){
    return res.status(404)
  }
  const lang = req.query.lang || 'nl';

  const data = await redisClient.withCache(`${lang}_obj_data_${req.query.obj_id}`, async ()=>{
      const httpClient = axios.create({});
    
  try {
      let response  = await httpClient.get(`${apiConfig.apiUrl}${lang}/collection/${req.query.obj_id}?key=${apiConfig.key}`);
      return response.data;
    }
    catch(error){
      return null
    }
  }
  );
  return data?res.status(200).send(data):res.status(404);
});
module.exports = router;
