import './App.css';
import Count from './pages/count';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { name, count, users } from './reducers/index';

import Thunk from 'redux-thunk';

const rootReducer = combineReducers({ count, name, users });

const store = createStore(rootReducer, applyMiddleware(Thunk));

store.subscribe(() => {
  console.log('Store changed', store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
