import axios from 'axios';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // ** redux-thunk 直接存取 dispatch **
  return function(dispatch) {
    // Submit email/password to the server {email: email, password: password}
    // ES6
    axios.post(`${ROOT_URL}/signin`, {email, password})

    // If request is good...
    // - Update state to indicate user is authenticated
    // - redirect to router '/feature'

    // If request is bad...
    // - Show an error to the user
  };
}
