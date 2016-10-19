import AppDispatcher from '../dispatcher/AppDispatcher';
import constants from '../constants';

import {MapStore} from 'flux/utils';

class RouteStore extends MapStore {
    reduce(state, action) {
        switch(action.type) {
            case constants.CHOOSE_AIRPORT:
                // action.target can be either "origin" or "destination"
                // action.code contains teh selected airport code
                return state.set(action.target, action.code);
                break;

            default:
                return state;
                break;
        }
    }
}

export default new RouteStore(AppDispatcher);
