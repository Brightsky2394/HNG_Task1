import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.get('/api/hello', async (req, res) => {
  const visitor_name = req.query.visitor_name;

  // Get the client's IP address
  const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // static location and temperature
  const location = 'Lagos';
  const temperature = 11; // Static temperature value

  // greeting message
  const greeting = `Hello, ${visitor_name}!, the temperature is ${temperature} degrees Celsius in ${location}`;

  res.status(200).json({
    client_ip,
    location,
    greeting,
  });
});

export default app;
