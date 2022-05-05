const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'REMOVE_USER':
      return state.filter((user) => user.id !== action.payload);
    case 'FETCH_USERS':
      break;
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

export default users;
