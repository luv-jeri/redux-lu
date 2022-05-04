import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Count() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const user = useSelector((state) => state.user);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      Name {user?.name || 'Guest'}
      <br/>
      isLogin {user?.isLogged ? 'true' : 'false'}
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'inc' });
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'dec' });
        }}
      >
        DEC
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set' });
        }}
      >
        Set
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'delete' });
        }}
      >
        delete
      </button>
    </div>
  );
}
