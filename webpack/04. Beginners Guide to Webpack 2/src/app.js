if (module.hot) {
  module.hot.accept()
}

import { groupBy } from 'lodash/collection';

import people from './people';

// import './style.scss';

import codeURL from './img/code.png';

const img = document.createElement('img');
img.src = codeURL;
img.style = "background: #2B3A42; padding: 20px";
img.width = 32;
document.body.appendChild(img);

const managerGroups = groupBy(people, 'manager')

const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;

const routes = {
  dashboard: () => {
    System.import('./dashboard').then((dashboard) => {
      dashboard.draw();
    })
    .catch((err) => {
      console.log("Chunk loading failed");
    })
  }
};

// Demo async loading with a timeout
setTimeout(routes.dashboard, 1000)