import { atlas, falconHeavy, saturnV } from './rockets/index.js';

export function main () {
    const rockets = [saturnV, atlas, falconHeavy];

    for (const rocket of rockets.values()) {
        rocket.launch();
    }
}
