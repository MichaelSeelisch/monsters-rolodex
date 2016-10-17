import {ReduceStore} from 'flux/utils';

import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

class BankBalanceStore extends ReduceStore {
  getInitialState() {
    return 0;
  }

  reduce(state, action) {
    switch(action.type) {
      case bankConstants.CREATED_ACCOUNT:
        return 0;
        break;

      case bankConstants.DEPOSITED_INTO_ACCOUNT:
        return state + action.ammount;
        break;

      case bankConstants.WITHDRAW_FROM_ACCOUNT:
        return state - action.ammount;
        break;

      default:
        return state
        break;
    }

    this.__emitChange();
  }
}

export default new BankBalanceStore(AppDispatcher);
