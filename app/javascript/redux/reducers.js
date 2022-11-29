import { FETCH_GREETINGS_FULFILLED } from './actions';

const greetingReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_GREETINGS_FULFILLED: {
      return action.payload;
    }
    default:
      return state;
  }
};
export default greetingReducer;
