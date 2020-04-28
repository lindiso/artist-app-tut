const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const app = express();

app.get('/version/:current', (req, res) => res.send(req.params.current === process.env.BUILD_VERSION));

app.use('/', expressStaticGzip(`${__dirname}/dist`, { enableBrotli: true }));
app.use('/*', expressStaticGzip(`${__dirname}/dist`, { enableBrotli: true }));

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

module.exports = app;
