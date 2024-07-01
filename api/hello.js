import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { visitor_name } = req.query;

  const client_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const location = 'New York'; // You should use an API to determine the actual location based on IP
  const temperature = 11; // This should be fetched from a weather API

  res.status(200).json({
    client_ip,
    location,
    greeting: `Hello, ${visitor_name}!, the temperature is ${temperature} degrees Celsius in ${location}`
  });
}
