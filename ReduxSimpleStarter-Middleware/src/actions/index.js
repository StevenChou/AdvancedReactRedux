import axios from 'axios';

import { FETCH_USERS } from './types';

// JSONPlaceholder is a free online REST service
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsers() {
  const request = axios.get('USERS_URL');

  return {
    type: FETCH_USERS,
    payload: request
  };
}
