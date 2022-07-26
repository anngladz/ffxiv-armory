const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case 'GET_CHARACTER':
      return {
        ...state,
        character: action.payload,
        loading: false,
      };
    case 'GET_SERVERS':
      return {
        ...state,
        servers: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_CHARACTERS':
      return {
        ...state,
        characters: [],
      };
    default:
      return state;
  }
};

export default Reducer;
