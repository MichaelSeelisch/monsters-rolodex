import { atlas, falconHeavy, saturnV } from './rockets/index.js';

export function main () {
    const rockets = [saturnV, atlas];

    for (const rocket of rockets.values()) {
        rocket.launch();
    }
}
