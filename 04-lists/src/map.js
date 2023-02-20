const service = require('./service');

Array.prototype.myMap = function (callback) {
  const mapedArray = [];
  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index, this);
    mapedArray.push(result);
  }
  return mapedArray;
};

async function main() {
  try {
    const people = await service.getPeople('a');
    let names = [];

    // Map
    names = people.results.map(person => person.name);

    // My Map
    names = people.results.myMap(person => person.name);

    console.log('names', names);
  } catch (error) {
    console.error('<MY_ERROR>', error);
  }
}
main();
