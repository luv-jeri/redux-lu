const count = (state = { value: 0 }, action) => {
  console.log('count reducer');
  switch (action.type) {
    case 'inc':
      return { value: state.value + 1 };
    default:
      return state;
  }
};


export default count;