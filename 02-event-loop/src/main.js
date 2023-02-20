function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'João Gabriel',
      dateOfBirth: new Date(2000, 7, 10)
    });
  }, 1000);
}

function getPhone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      number: '123123',
      ddd: '31'
    });
  }, 2000);
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'Rita',
      number: 0
    });
  }, 2000);
}

getUser(function userResolve(error, user) {
  if (error) {
    console.error('<ERROR> user', error);
    return;
  }

  getPhone(user.id, function phoneResolve(error1, phone) {
    if (error1) {
      console.error('<ERROR> phone', error1);
      return;
    }

    getAddress(user.id, function address(error2, address) {
      if (error2) {
        console.error('<ERROR> address', error2);
        return;
      }

      console.log(`
        Name: ${user.name}
        Address: ${address.street},${address.number}
        Phone: (${phone.ddd}) ${phone.number}
      `);
    });
  });
});
