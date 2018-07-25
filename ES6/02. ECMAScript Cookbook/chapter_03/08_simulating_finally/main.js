export function main() {

    console.log('Before promise created');

    Promise.resolve(Math.random() > 0.5)
        .then(addBoosters)
        .then((boosters) => console.log('Ready for launch:', boosters))
        .catch(console.error)
        .then(() => console.log('Time to inform the press.'));

    console.log('After promise created');
}

function addBoosters(shouldFail) {
    if (shouldFail) {
        throw new Error('Unable to add Boosters');
    }

    return {
        boosters: [{
            count: 2,
            fuelType: 'solid'
        }, {
            count: 1,
            fuelType: 'liquid'
    }]
  };
}
