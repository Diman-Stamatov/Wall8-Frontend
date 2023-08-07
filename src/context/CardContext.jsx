import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cardReducer } from "../reducers/cards/CardReducer";
import axios from "axios";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";

const CardsContext = createContext();
export const CardsProvider = ({ children }) => {
  const { dispatch: loadingDispatch } = useLoading();
  const { user } = useAuth();
  const [state, dispatch] = useReducer(cardReducer, {
    cards: [],
    loading: false,
    error: null,
  });

  const getCardsOfUser = async () => {
    loadingDispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "GET_CARDS_LOADING", payload: true });
    console.log("dispatched loading", loadingDispatch);
    console.log("dispatched loading", dispatch);

    await axios
      .get(
        `http://localhost:5120/api/virtual-wallet/users/${user.data.id}/cards`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        const cards = response.data;
        console.log("WE GOT TO HERE response cards", cards);
        dispatch({
          type: "GET_CARDS_SUCCESS",
          payload: [...state.cards, cards],
        }),
          loadingDispatch({ type: "SET_LOADING", payload: false });

      })
      .catch((error) => {
        dispatch({ payload: error, type: "GET_CARDS_ERROR" });
        loadingDispatch({ type: "SET_LOADING", payload: false });
      });
  };
  useEffect(() => {
    getCardsOfUser();
  }, []);

  return (
    <CardsContext.Provider value={{ cards: state.cards, getCardsOfUser }}>
      {children}
    </CardsContext.Provider>
  );
};
export const useCards = () => {
  return useContext(CardsContext);
};
