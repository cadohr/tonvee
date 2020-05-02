export function connectRoomRequest(accessToken, name) {
  return {
    type: '@room/CONNECT_ROOM_REQUEST',
    payload: { accessToken, name },
  };
}

export function connectRoomSuccess(room) {
  return {
    type: '@room/CONNECT_ROOM_SUCCESS',
    payload: { room },
  };
}

export function connectRoomFailure() {
  return {
    type: '@room/CONNECT_ROOM_FAILURE',
  };
}
