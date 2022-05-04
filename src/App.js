import './App.css';
import Count from './pages/count';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// its a reducer
const count = (state = 0, action) => {
  console.log('count action ', action);
  if (action.type === 'inc') {
    return state + 1;
  }
  if (action.type === 'dec') {
    return state - 1;
  }
  return state;
};

const user = (state = {}, action) => {
  console.log(' user action ', action);
  if (action.type === 'set') {
    return { name: 'Sanjay', isLogged: true };
  }
  if (action.type === 'delete') {
    return {};
  }
  return state;
};

const rootReducer = combineReducers({ count, user });

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('count changed', store.getState());
});

store.dispatch({ type: 'set' });

function App() {
  return (
    <Provider store={store}>
      <Count></Count>
    </Provider>
  );
}

export default App;
