const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Horror movie app is running on port ${port}.`);
});

const SplitFactory = require('@splitsoftware/splitio').SplitFactory;

const factory = SplitFactory({
  core: {
    authorizationKey: '7m4qctr1k6vi9kshbbu972vqm8nklom6qnjh'
  }
});

const client = factory.client();

const treatmentMiddleware = function (request, response, next) {
  const userEmail = request.headers['authorization'];
  request.treatment = client.getTreatment(userEmail, 'database_split');
  next();
}

const api = require('./api');

app.get('/horrors/', treatmentMiddleware, api.getAllHorrors);
app.get('/horrors/:id', treatmentMiddleware, api.getHorrorById);
app.post('/horrors/', treatmentMiddleware, api.addHorror);
app.put('/horrors/:id', treatmentMiddleware, api.updateHorror);
app.delete('/horrors/:id', treatmentMiddleware, api.deleteHorror);

