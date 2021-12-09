import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Action } from "./actions";

const initialState = {
  allGuests: [],

  // These a Balmorhea's albums...
  add: [],

  // These are the tracks of Rivers Arms...
  remove: [],

  // Add a flag to your Redux store that indicates whether or not the app has a background task in progress
  isWaiting: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case Action.LoadedGuestList:
      return {
        ...state,
        allGuests: action.payload,
      };
    case Action.StartedWaiting:
      return {
        ...state,
        isWaiting: true,
      };
    case Action.StoppedWaiting:
      return {
        ...state,
        isWaiting: false,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
