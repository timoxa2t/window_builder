const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get("/api/*", (req, res) => {

    const options = {
        host: "92.52.159.202",
        port: "37080",
        path: `/upp/hs/web_exchange/info?barcode=${req.query.barcode}`,
        method: req.method
    };

    http.request(options, function(response) {
        let data = ""
        response.on('data', function (chunk) {
          data += chunk;
        });
        response.on('end', () => {
            res.json(data)
        });
        response.on('error', error => {
          console.error(error);
        })
      }).end();
})

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  
});

app.listen(3000);

