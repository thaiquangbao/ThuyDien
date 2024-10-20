const calculationLake = require('./calculationLake');
function routes(app) {
  app.use('/api/v1/calculation-lake', calculationLake);
}
module.exports = routes;