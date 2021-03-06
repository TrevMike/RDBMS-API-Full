const express = require('express');
const helmet = require('helmet');
const cohortRoutes = require('./cohorts/cohortRoutes.js');
const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.get('/', (req, res)=>{
  res.send('This is Working');
});

server.use('/api/cohorts', cohortRoutes);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
