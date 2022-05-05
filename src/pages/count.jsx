import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import countAction from '../actions/count';
import userAction from '../actions/users';
const Count = () => {
  const dispatch = useDispatch();

  const { inc } = countAction;
  const { fetchAwait, fetchMiddleware } = userAction;

  const [num, setNum] = React.useState(0);

  const count = useSelector((state) => state.count);
  const { name } = useSelector((state) => state.name);
  const users = useSelector((state) => state.users);
  
  // dispatch({ type: 'inc' });

  // console.log(test);
  // const user = useSelector((state) => state.user);
  console.log(users);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
      {/* Name {user?.name || 'Guest'}
      <br />
      isLogin {user?.isLogged ? 'true' : 'false'} */}
      <h1>Count : {count.value}</h1>
      <h1>Name : {name}</h1>
      <input type='text' value={num} onChange={(e) => setNum(e.target.value)} />
      <button
        onClick={async () => {
          dispatch(inc(4));
        }}
      >
        INC
      </button>
      <button onClick={() => {}}>DEC</button>
      <button
        onClick={async () => {
          // dispatch(await fetchAwait());
          dispatch(fetchMiddleware());
        }}
      >
        FETCH
      </button>
    </div>
  );
};

export default React.memo(Count);
