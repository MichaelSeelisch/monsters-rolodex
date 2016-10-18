import AppDispatcher from '../dispatcher/AppDispatcher';
import AirportActions from '../actions/AirportActionsCreators';
import constants from '../constants';
import RouteStore from './RouteStore';

import {ReduceStore} from 'flux/utils';

class TicketStore extends ReduceStore {
    getInitialState() {
        return [];
    }

    reduce(state, action) {
        switch(action.type) {
            case constants.FETCH_TICKETS:
                return [];
                break;
            
            case constants.FETCH_TICKETS_SUCCESS:
                return action.payload.response;
                break;

            default:
                return state;
                break;
        }
    }
}

export default new TicketStore(AppDispatcher);