const inc = async (num) => {
  return {
    type: 'inc',
    payload: num || 1,
  };
};

const dec = (num) => {
  return {
    type: 'set',
    payload: num || 1,
  };
};

const toExports = {
  inc,
  dec,
};

export default toExports;
