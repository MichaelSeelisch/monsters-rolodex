export function main () {

    console.log('Before promise created');

    new Promise(function (resolve, reject) {
        resolve(Math.random());
    })
    .then(function (value) {
        return value >= 0.5;
    })
    .then(function (isReadyForLaunch) {
        if (isReadyForLaunch) {
            console.log('Start the countdown! ');
        } else {
            console.log('Abort the mission. ');
        }
    });

    console.log('After promise created');
}
