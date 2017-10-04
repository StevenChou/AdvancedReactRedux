import { SAVE_COMMENT } from './../actions/types';

export default function(state = [], action) {
  console.log('@@ state', state);
  switch (action.type) {
    case SAVE_COMMENT:
      // return state.concat([action.payload])
      return [...state, action.payload];
    default:
      return state;
  }
}
