import { uxm } from 'uxm'

uxm({ all: true }).then(metrics => {
    //  console.log(metrics);
    const list = document.createElement('ul');
    
    let listEntry;
    for (let key in metrics) {
        listEntry = document.createElement('li');
        listEntry.textContent = `${key}: ${metrics[key]}`;
        list.appendChild(listEntry);
    }

    document.body.appendChild(list);
});
