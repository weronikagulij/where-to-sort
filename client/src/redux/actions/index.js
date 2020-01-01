export const registerMap = (map) => ({
  type: 'REGISTER_MAP',
  name: 'REGISTER_MAP',
  payload: map,
});

export const registerLocation = (location) => ({
  type: 'REGISTER_LOCATION',
  name: 'REGISTER_LOCATION',
  payload: location,
});

export const registerScrollView = (view) => ({
  type: 'REGISTER_SCROLLVIEW',
  name: 'REGISTER_SCROLLVIEW',
  payload: view,
});
