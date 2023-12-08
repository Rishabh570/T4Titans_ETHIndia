// const serviceLoader = require('./service');
const web3 = require('./web3');

module.exports = {
  run: () => {
    return new Promise(async (resolve) => {
      const ress = await web3.run();
      console.log('web3 loader result = ', ress);
      // const service = serviceLoader.init({  });
      // other dependencies init goes here...

      resolve({ });
    });
  },
};
