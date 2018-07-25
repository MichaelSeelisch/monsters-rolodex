import { atlas, falconHeavy, saturnV } from './rockets/index.js';

export function main () {
    const rockets = [saturnV, atlas, falconHeavy];
    rockets.map((rocket) => 
        rocket.launch()
    );
}
