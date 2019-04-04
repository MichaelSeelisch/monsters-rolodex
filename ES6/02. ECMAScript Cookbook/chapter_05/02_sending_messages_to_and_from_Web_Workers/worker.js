const global = this;
global.onmessage = (message) => {
    const { type, numbers } = message.data;

    switch (type) {
        case 'sum':
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            global.postMessage({
                result: sum,
                type
            });
        break;

        case 'average':
            const average = numbers.reduce((acc, curr) => acc + curr, 0) /numbers.length;
            global.postMessage({
                result: average,
                type
            });
        break;
    }
};
