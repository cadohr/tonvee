export function registerInRequest(name, email, password) {
  return {
    type: '@register/REGISTER_IN_REQUEST',
    payload: { name, email, password },
  };
}

export function registerInSuccess() {
  return {
    type: '@register/REGISTER_IN_SUCCESS',
  };
}

export function registerFailure() {
  return {
    type: '@register/REGISTER_FAILURE',
  };
}
