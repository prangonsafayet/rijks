var express = require('express');
var router = express.Router();
const axios = require("axios");
/* GET home page. */
router.get('/search', async function(req, res, next) {
  const httpClient = axios.create({
  });
  try {
    let response  = await httpClient.get(`https://www.rijksmuseum.nl/api/${req.query.lang || 'nl'}/collection?key=rirqQnx4`);
    return res.status(200).send(response.data);

  }
  catch(error){
    console.log(error);
    return res.status(500).send({})
  }

});

module.exports = router;
