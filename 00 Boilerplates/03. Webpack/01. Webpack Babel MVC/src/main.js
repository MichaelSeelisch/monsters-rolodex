import PenguinController from './PenguinController';
import PenguinModel from './PenguinModel';
import PenguinView from './PenguinView';

let penguinModel = new PenguinModel();

let targetElement = document.getElementById('listOfPenguins');
let penguinView = new PenguinView(targetElement);

let controller = new PenguinController(penguinView, penguinModel);
controller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });

console.log('App Started!');