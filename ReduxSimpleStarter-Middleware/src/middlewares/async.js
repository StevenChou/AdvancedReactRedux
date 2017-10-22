export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload
    // or, the payload does not have a .then property
    // we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      // call next middleware or reducers
      return next(action);
    }

    
    // Make sure that action's promise resolves
    action.payload.then(function(response) {
      // create a new action with the old type, but
      // replace the promise with the response data
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
}
