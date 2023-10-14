const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Route to fetch data from the API
app.get('/api', async (req, res, next) => { 
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
        const users = response.data;
        res.json(users);
    } catch (error) {
        next(error);
    }
});




// start the server
const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
