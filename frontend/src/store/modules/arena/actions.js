export function createArenaRequest(name) {
  return {
    type: '@arena/CREATE_ARENA_REQUEST',
    payload: { name },
  };
}

export function createArenaSuccess(arena) {
  return {
    type: '@arena/CREATE_ARENA_SUCCESS',
    payload: { arena },
  };
}

export function createArenaFailure() {
  return {
    type: '@arena/CREATE_ARENA_FAILURE',
  };
}
