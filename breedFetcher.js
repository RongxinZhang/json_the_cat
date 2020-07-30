const request = require('request');

const getBreeds = function(breed, cb) {
  let getBreedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(getBreedUrl, (resErr, res, body)=>{
    
    if (resErr) {
      cb(resErr, null);
    }

    try {
      const data = JSON.parse(body);
      if (data.length > 0) {
        cb(null, data[0].description);
      }
    } catch (error) {
      cb(error, null);
    }
  });
};

getBreeds("Siberian", (err, res)=>{
  console.log(err, res);
});


module.exports = { getBreeds };