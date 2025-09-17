import express from 'express'
const app = express();

app.get('/', function(req, res) {
    res.end("Homepage");
});

app.get('/contact-us', function(req, res){
    res.end('you can contact on mk@mk.com');
});

app.post('/tweet', function(req, res){
    res.status(200)
    .end('tweet created success');
});

app.listen(8000, () => console.log(`Server is listening on port 8000`));
