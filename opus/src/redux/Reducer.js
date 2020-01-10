const initialState = {
  token: null
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const storeToken = token => ({
  type: 'STORE_TOKEN',
  payload: token
});

export default Reducer;
