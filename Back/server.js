const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); //for the env ig ?

const app = express();
const PORT = 3001;

app.use(cors());

let accessToken = '';

async function getAccessToken() {
  try {
    const res = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token',
      new URLSearchParams({
        grant_type: 'client_credentials',   
        client_id: process.env.AMADEUS_API_KEY,
        client_secret: process.env.AMADEUS_API_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    accessToken = res.data.access_token;
    console.log("Token :", accessToken);
  } catch (err) {
    console.error('Erreur lors de la récupération du token :', err.message);
    throw err;
  }
}


app.get('/api/search', async (req, res) => {
  const { from, to, date } = req.query;

  try {
    if (!accessToken) await getAccessToken();

    const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        originLocationCode: from,
        destinationLocationCode: to,
        departureDate: date,
        adults: 1,
        max: 6,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erreur recherche :', error.message);
    res.status(500).json({ error: 'Erreur lors de la recherche de vols' });
  }
});


app.listen(PORT, () => {
  console.log(`Flight Booking ouvert sur le port ${PORT}`);
});
