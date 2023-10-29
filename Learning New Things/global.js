console.log(__dirname);
console.log(__filename);

setTimeout(() => {
  console.log("Finish the interval");
  clearInterval(int);
}, 5000);

const int = setInterval(() => {
  console.log("In the interval");
}, 1000);
