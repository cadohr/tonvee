import produce from 'immer';

const INITIAL_STATE = { arena: null, loading: false };

export default function arena(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@arena/CREATE_ARENA_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@arena/CREATE_ARENA_SUCCESS': {
        draft.loading = false;
        draft.arena = action.payload.arena;
        break;
      }

      case '@arena/CREATE_ARENA_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
