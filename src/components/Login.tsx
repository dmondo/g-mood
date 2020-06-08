import React from 'react';
import Button from '@material-ui/core/Button';
import { Store } from '../store/Store';
import NewUser from './NewUser';
import ExistingUser from './ExistingUser';


const Login = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);
  const { newUser } = state;

  const userExists = () => {
    dispatch({ type: 'NEWUSER', payload: !newUser });
  };

  return (
    <>
      {newUser && <NewUser />}
      {!newUser && <ExistingUser />}
      <Button
        color="secondary"
        onClick={userExists}
      >
        {newUser ? 'already have an account?' : 'create account'}
      </Button>
    </>
  );
};

export default Login;
