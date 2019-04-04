const global = this;
const timeout = Math.floor(Math.random() * 10000);

global.onmessage = (message) => {
    const data = JSON.parse(message.data);
    const newData = {
        index: data.index,
        timeout: timeout
    };

    setTimeout(() => global.postMessage(newData), timeout);
};
