export default function(state = {}, aciton) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authentication: true };
    case UNAUTH_USER:
      return { ...state, authentication: false };
  }

  return state;
}
