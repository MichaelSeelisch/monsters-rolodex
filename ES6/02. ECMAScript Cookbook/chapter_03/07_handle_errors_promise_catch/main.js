export function main() {

    console.log('Before promise created');

    const rocket = {};

    Promise.resolve(rocket)
        .then(addBoosters)
        .catch(console.error);
    Promise.resolve(rocket)
        .then(performGuidanceDiagnostic)
        .catch(console.error);

    console.log('After promise created');
}

function addBoosters (rocket) {
    throw new Error('Unable to add Boosters');
}

function performGuidanceDiagnostic (rocket) {
    return new Promise(function (resolve, reject) {
        reject(new Error('Unable to finish guidance diagnostic'));
    });
}
