const { parentPort, workerData } = require("worker_threads");

const { number} = workerData


function factorial(n){
  if (n === 0) {
    return 1
  }
  if (n == 200) {
    let sum = 1
    // 500000000000
    for (let i = 1; i <= 100000000000; i++) {
      sum++
    }
    console.log("timeout");
    return sum
  }
  console.log("Done");
  return n * factorial(n-1)
}

const result = factorial(number)

parentPort.postMessage({message: "Done", result});