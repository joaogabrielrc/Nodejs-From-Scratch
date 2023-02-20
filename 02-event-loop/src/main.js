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

const promiseUser = getUser();

promiseUser
  .then(function userResolve(result) {
    return {
      user: {
        id: result.id,
        name: result.name
      }
    };
  })
  .then(function (data) {
    const promisePhone = getPhone(data.id);

    return promisePhone.then(function phoneResolve(result) {
      return {
        ...data,
        phone: result
      };
    });
  })
  .then(function (data) {
    const addressAsync = getAddressAsync(data.user.id);

    return addressAsync.then(function addressResolve(result) {
      return {
        ...data,
        address: result
      };
    });
  })
  .then(function (data) {
    console.log(`
        Name: ${data.user.name}
        Address: ${data.address.street}, ${data.address.number}
        Phone: (${data.phone.ddd}) ${data.phone.number}
      `);
  })
  .catch(function (error) {
    console.error('<ERROR>', error);
  });
