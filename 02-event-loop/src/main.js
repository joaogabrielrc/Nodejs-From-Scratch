const util = require('util');

const getAddressAsync = util.promisify(getAddress);

function getUser() {
  return new Promise(function promiseResolve(resolve, reject) {
    setTimeout(() => {
      // return reject(new Error('User does not exists'));

      return resolve({
        id: 1,
        name: 'João Gabriel',
        dateOfBirth: new Date(2000, 7, 10)
      });
    }, 1000);
  });
}

function getPhone(userId) {
  return new Promise(function promiseResolve(resolve, reject) {
    setTimeout(() => {
      resolve({
        number: '123123',
        ddd: '31'
      });
    }, 2000);
  });
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'Rita',
      number: 0
    });
  }, 2000);
}

main();
async function main() {
  try {
    const user = await getUser();
    const result = await Promise.all([
      getPhone(user.id),
      getAddressAsync(user.id)
    ]);
    const { [0]: phone, [1]: address } = result;

    console.log(`
      Name: ${user.name}
      Address: ${address.street}, ${address.number}
      Phone: (${phone.ddd}) ${phone.number}
    `);
  } catch (error) {
    console.error('<ERROR>', error);
  }
}
