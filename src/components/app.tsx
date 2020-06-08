import React from 'react';
import '../style/App.css';
import { Store } from '../store/Store';
import UserPortal from './UserPortal';
import Login from './Login';

const App = (): JSX.Element => {
  const { state } = React.useContext(Store);
  const { loginStatus, user } = state;
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
