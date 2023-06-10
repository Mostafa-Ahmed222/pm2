const path = require ("path");
const { Worker } = require("worker_threads");


const getFactorial = (req, res, next)=>{
  const {number} = req.body
  let y = 5
  const flag = 1
  if (number == 300) {
    y = 5/0
    process.exit(1);
    flag = 6/0
  }  
  if (number == 500) {
    flag = 4
  }
  const worker = new Worker(
    path.join(__dirname, "../../../services/worker.js"), {workerData: {number}}
  );
  worker.on("message", ({message ,result}=data) => {
    return res.status(201).json({ message, result});
  });
  worker.on("error", (err) => {
    return res.status(400).json({ message: "error", err });
  });
  
}

module.exports = {
  getFactorial
}