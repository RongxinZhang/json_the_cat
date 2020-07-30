const request = require('request');

const getBreeds = function(breed) {
  let getBreedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(getBreedUrl, (resErr, res, body)=>{
    
    if (resErr) {
      return resErr;
    }

    try {
      const data = JSON.parse(body);
      if (data.length < 1) {
        return console.log("NO DATA");
      }
      return data;
    } catch (error) {
      return error;
    }
  });
};

getBreeds("sib");