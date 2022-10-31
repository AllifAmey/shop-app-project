const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

// create a get request on localhost:8000/weather. Frontend sends to localhost:8000 to get the data.

app.get("/weather", (req, res) => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  const options = {
    method: "Get",
    url: `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

/* 

Use https://www.youtube.com/watch?v=FcwfjMebjTU&t=978s&ab_channel=CodewithAniaKub%C3%B3w to store the api key, I am not having the same issue as before with the blog app, these api keys will not be leaked at all cost.

Essentially the above link will show how to use express js to call the api using the environmental variable which stores the api key.
What happens is two servers are running instead and now future projects will require npm run start:frontend and npm run start:backend

*/

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
