const service = require('./service');

Array.prototype.myFilter = function (callback) {
  const filteredArray = [];
  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index, this);
    if (!result) continue;
    filteredArray.push(this[index]);
  }
  return filteredArray;
};

async function main() {
  try {
    const { results: people } = await service.getPeople('a');
    let larsFamily = [];

    // Map
    larsFamily = people.filter(person => {
      return person.name.toLowerCase().indexOf('lars') !== -1;
    });

    // My Map
    larsFamily = people.myFilter(person => {
      return person.name.toLowerCase().indexOf('lars') !== -1;
    });

    const names = larsFamily.map(person => person.name);

    console.log('names', names);
  } catch (error) {
    console.error('<MY_ERROR>', error);
  }
}
main();
