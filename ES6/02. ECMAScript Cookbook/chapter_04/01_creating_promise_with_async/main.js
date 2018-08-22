async function someTask () {
    console.log('Performing some task');
}

export function main () {
    console.log('=== Main ===');
    console.log('before task');
    someTask();
    console.log('after task created');
}

export function main2 () {
    console.log('=== Main2 ===');
    console.log('Before Promise created');
    someTask()
        .then(function () {
            console.log('After Task completed');
        });
    console.log('After Promise created');
}
