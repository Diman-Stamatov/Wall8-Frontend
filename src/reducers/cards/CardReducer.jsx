export const cardReducer = (state, action) => {
    switch (action.type) {
      case "GET_CARDS_SUCCESS":
        return {
          ...state,
          cards: action.payload,
          loading: false,
          error: null,
        };
      case "GET_CARDS_LOADING":
        return { ...state, loading: true, error: null };
      case "GET_CARDS_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  