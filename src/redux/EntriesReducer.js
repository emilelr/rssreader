import {combineReducers} from 'redux';

const INITIAL_STATE = {
  entries: [],
};

const entriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_ENTRIES':
      return action.payload;
    default:
      return state
  }
};

export default combineReducers({
  entries: entriesReducer,
});
