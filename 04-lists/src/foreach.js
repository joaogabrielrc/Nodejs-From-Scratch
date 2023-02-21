const service = require('./service');

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

async function main() {
  try {
    const people = await service.getPeople('a');
    const names = [];

    // Map
    people.results.forEach(person => {
      names.push(person.name);
    });

    // My Map
    people.results.myForEach(person => {
      names.push(person.name);
    });

    console.log('names', names);
  } catch (error) {
    console.error('<MY_ERROR>', error);
  }
}
main();
