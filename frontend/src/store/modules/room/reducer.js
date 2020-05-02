import produce from 'immer';

const INITIAL_STATE = { room: null, loading: false };

export default function room(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@room/CONNECT_ROOM_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@room/CONNECT_ROOM_SUCCESS': {
        draft.loading = false;
        draft.room = action.payload.room;
        break;
      }

      case '@room/CONNECT_ROOM_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
