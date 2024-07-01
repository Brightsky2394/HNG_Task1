const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', async (req, res) => {
  const visitorName = req.query.visitor_name;
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    const locationResponse = await axios.get(`http://ip-api.com/json/${clientIp}`);
    const locationData = locationResponse.data;
    const city = locationData.city;
    const temp = await getTemperature(city);

    res.json({
      client_ip: clientIp,
      location: city,
      greeting: `Hello, ${visitorName}!, the temperature is ${temp} degrees Celsius in ${city}`
    });
  } catch (error) {
    res.status(500).send('Error retrieving data');
  }
});

async function getTemperature(city) {
  const apiKey = process.env.API_KEY;
  const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  return weatherResponse.data.main.temp;
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
