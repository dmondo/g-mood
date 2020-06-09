import React from 'react';
import '../style/App.css';
import { Store } from '../store/Store';
import UserPortal from './UserPortal';
import Login from './Login';

const App = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { loginStatus, user } = state;

  React.useEffect(() => {
    const token = window.localStorage.getItem('sudokuJS');
    if (token) {
      const username = window.localStorage.getItem('sudokuName');
      dispatch({ type: 'USER', payload: username });
      dispatch({ type: 'TOKEN', payload: token });
      dispatch({ type: 'LOGIN', payload: true });
    }
  }, []);

  return (
    <>
      {
        !loginStatus && (
          <div className="title">
            sudokuJS
          </div>
        )
      }
      {
        loginStatus && (
          <div className="title">
            {`sudokuJS -- welcome ${user}`}
          </div>
        )
      }
      {!loginStatus && <Login />}
      {loginStatus && <UserPortal />}
    </>
  );
};

export default App;
