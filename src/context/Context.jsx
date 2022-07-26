import { createContext, useReducer } from 'react';
import reducer from './Reducer';

const Context = createContext();

export const Provider = ({ children }) => {
  const initialState = {
    characters: [],
    character: {},
    servers: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
