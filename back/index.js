const test = require('./selenium/test');

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(cors());




app.listen(PORT, () => {
    console.log('Work!!!')
})
const movieId = [];
app.post('/api', async (req, res) => {
    res.setHeader("access-control-allow-credentials", "false");
    res.setHeader( "Access-Control-Allow-Origin", "https://my-movie-app-yehorsaz.vercel.app/");
if (movieId.length > 0) {
    movieId.splice(0, 2);
}


    movieId[0] = req.body.movieId;
    movieId[1] = await test(movieId[0]);


    res.json({
        status: "ok",
        movieId
    });
})
app.get('/api', (req, res) => {

        res.json({
            movieId
        });

})