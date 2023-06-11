// const cluster = require('cluster')
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   // Fork workers equal to the number of CPU cores
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }
// } else {

  const express = require( "express");
const factorialRouter = require("./src/modules/factorial/factorial.router.js");
  const app = express()
  const port = 3000
  
  app.use(express.json())

  app.get('/', (req, res) => res.send('Hello World!'))
  app.use("/factorial", factorialRouter)

  const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// }

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
  // Perform any necessary cleanup or logging

  // Gracefully stop the server
  server.close(() => {
    console.log('Server stopped');
    process.exit(1); // Exit the process with a failure status
  });
});
// GRACEFUL SHUTDOWN 

// shutdown logic 
const shutdown = (signal, value) => {
  console.log("shutdown!");
  server.close(() => {
    console.log(`server stopped by ${signal} with value ${value}`);
    process.exit(128 + value);
  });
};

// SIGHUP
process.on('SIGHUP', () => {
  console.log(`process received a SIGHUP signal`);
  shutdown('SIGHUP', 1);
});
// SIGINT
process.on('SIGINT', () => {
  console.log(`process received a SIGINT signal`);
  shutdown('SIGINT', 2);
});
// SIGTERM
process.on('SIGTERM', () => {
  console.log(`process received a SIGTERM signal`);
  shutdown('SIGTERM', 15);
});

// Handle termination signals gracefully
// process.on('SIGINT', () => {
//   console.log('Received SIGINT signal. Closing server...');

//   // Prevent new requests from being accepted
//   server.close((err) => {
//     if (err) {
//       console.error('Error while closing server:', err);
//       process.exit(1);
//     }

//     console.log('Server closed. Exiting process.');
//     process.exit(0);
//   });
// });
