const os = require('os');
//user info
const user = os.userInfo();
console.log(user);
//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()}seconds`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.platform(),
};
console.log(currentos);
