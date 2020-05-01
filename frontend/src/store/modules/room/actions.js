export function createRoomRequest(name) {
  return {
    type: '@room/CREATE_ROOM_REQUEST',
    payload: { name },
  };
}

export function createRoomSuccess(room) {
  return {
    type: '@room/CREATE_ROOM_SUCCESS',
    payload: { room },
  };
}
