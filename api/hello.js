import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Your OpenWeatherMap API key
const OPENWEATHERMAP_API_KEY = process.env.API_KEY;

app.get('/api/hello', async (req, res) => {
  const visitor_name = req.query.visitor_name;

  // Get the client's IP address
  const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    // Fetch location information based on IP address
    const locationResponse = await fetch(`http://ipapi.co/${client_ip}/json/`);
    const locationData = await locationResponse.json();
    const location = locationData.city || 'Unknown location';

    // Fetch weather information based on location
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${OPENWEATHERMAP_API_KEY}`);
    const weatherData = await weatherResponse.json();
    const temperature = weatherData.main.temp;

    // Greeting message
    const greeting = `Hello, ${visitor_name}!, the temperature is ${temperature} degrees Celsius in ${location}`;

    res.status(200).json({
      client_ip,
      location,
      greeting,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
