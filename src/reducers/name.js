const name = (state = { name: 'Sanjay' }, action) => {
  console.log('name reducer');
  switch (action.type) {
    case 'set':
      return { name: action.payload };
    default:
      return state;
  }
};

export default name;
