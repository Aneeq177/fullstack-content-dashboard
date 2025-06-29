require('dotenv').config();
const axios = require('axios');

const API_TOKEN = process.env.SPORTMONKS_API_TOKEN;
const SPORTMONKS_API_BASE_URL = 'https://api.sportmonks.com/v3';

async function testApiConnection() {
  // This is the simplest, most basic endpoint to list all available sports.
  const url = `${SPORTMONKS_API_BASE_URL}/sports?api_token=${API_TOKEN}`;

  try {
    console.log('Attempting to connect to the basic /sports endpoint...');
    console.log('Request URL:', url); // This will show us the exact URL being used

    const response = await axios.get(url);

    console.log('SUCCESS! Connection established.');
    console.log('Here is the data received:');
    console.log(response.data); // Print the full response

  } catch (error) {
    if (error.response) {
      console.error('API Error Status:', error.response.status);
      console.error('API Error Data:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Run the test
testApiConnection();