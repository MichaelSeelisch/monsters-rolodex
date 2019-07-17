import { rj } from 'react-rocketjump';

export const MoviesState = rj({
    effect: () => fetch('https://swapi.co/api/films')
                      .then(response => response.json())
});
