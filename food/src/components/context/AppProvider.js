import React, { createContext, useReducer } from "react";

// Create the DispatchContext and stateContext contexts
const DispatchContext = createContext();
const StateContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
  
    cartItems:[]
  };

  const reducer = (state, action) => {
    // console.log('state is',state)
    // console.log('action is',action.payload)
    switch (action.type) {
        case 'add_to_cart':
            return {...state,cartItems:[...state.cartItems,action.payload]}
      default:
        return state;
    }
  };

  // Use useReducer to manage state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
 console.log('state is ',state)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export { AppProvider, DispatchContext, StateContext };
