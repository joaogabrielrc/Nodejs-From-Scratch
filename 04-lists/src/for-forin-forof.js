const service = require('./service');

async function main() {
  try {
    const people = await service.getPeople('a');
    const names = [];

    // For
    for (let i = 0; i < people.results.length; i++) {
      const person = people.results[i];
      names.push(person.name);
    }

    // For In
    for (i in people.results) {
      const person = people.results[i];
      names.push(person.name);
    }

    // For Of
    for (person of people.results) {
      names.push(person.name);
    }

    console.log('names', names);
  } catch (error) {
    console.error('<MY_ERROR>', error);
  }
}
main();
