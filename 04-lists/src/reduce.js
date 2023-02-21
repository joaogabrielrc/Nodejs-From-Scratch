const service = require('./service');

Array.prototype.myReduce = function (callback, initialValue) {
  let reducedValue =
    initialValue !== undefined ? initialValue : this[0];

  for (let index = 1; index < this.length; index++) {
    reducedValue = callback(reducedValue, this[index], index, this);
  }

  if (reducedValue === undefined)
    throw new TypeError(
      'Reduce of empty array with no initial value'
    );

  return reducedValue;
};

async function main() {
  try {
    const { results: people } = await service.getPeople('a');

    const heights = people.map(person => parseFloat(person.height));
    let totalHeight = 0;

    // Reduce
    totalHeight = heights.reduce((previous, current) => {
      return previous + current;
    });

    console.log('total height', totalHeight);

    // My Reduce
    totalHeight = heights.myReduce((previous, current) => {
      return previous + current;
    });

    console.log('my total height', totalHeight);
  } catch (error) {
    console.error('<MY_ERROR>', error);
  }
}
main();
