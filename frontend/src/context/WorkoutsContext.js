import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

const WorkoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUTS":
      return {
        workouts: [action.payload, ...state.workouts], //shouldnt it be [...action.payload, ...state.workouts]??? NO! because here just a single workout will be passed in as the payload but in the previous case an array of many workouts would have been passed in.
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WorkoutsReducer, {
    workouts: null,
  });
  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
