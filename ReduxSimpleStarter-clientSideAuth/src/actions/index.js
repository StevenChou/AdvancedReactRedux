import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // ** redux-thunk 直接存取 dispatch **
  // automatically call by the redux-thunk middleware
  return function(dispatch) {
    // Submit email/password to the server {email: email, password: password}
    // ES6
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        // - Save the JWT token
        localStorage.setItem('token', response.data.token);

        // - redirect to router '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
      });
  };
}
