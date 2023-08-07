export const transferReducer = (state, action) => {
  switch (action.type) {
    case "POST_TRANSFERS_SUCCESS":
      return {
        ...state,
        transfers: action.payload,
        loading: false,
        error: null,
      };
    case "POST_TRANSFERS_LOADING":
      return { ...state, loading: true, error: null };
    case "POST_TRANSFERS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
