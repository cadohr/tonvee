import produce from 'immer';

const INITIAL_STATE = { loading: false };

export default function register(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@register/REGISTER_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@register/REGISTER_IN_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@register/REGISTER_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
