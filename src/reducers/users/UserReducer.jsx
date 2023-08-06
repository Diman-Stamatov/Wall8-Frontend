export const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload, loading: false, error: null };
    case "FETCH_USERS_LOADING":
      return { ...state, loading: true, error: null };
    case "FETCH_USERS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
