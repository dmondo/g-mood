import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { Store } from '../store/Store';
import '../style/Login.css';

const useStyles = makeStyles((theme) => ({
  margin: { margin: theme.spacing(1) },
  input: { color: 'white' },
}));

const ExistingUser = (): JSX.Element => {
  const classes = useStyles();
  const { state, dispatch } = React.useContext(Store);
  const { failedLogin } = state;

  const verifyAccount = async () => {
    const data = {
      email: (document.getElementById('email') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
    };

    const url = '/auth';

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    const result = await fetch(url, options);

    console.log(result);

    if (result.status === 200) {
      const verifyUser = await result.json();

      console.log(verifyUser);
      dispatch({ type: 'USER', payload: verifyUser.username });
      dispatch({ type: 'FAILED', payload: false });
      dispatch({ type: 'LOGIN', payload: true });
    } else {
      dispatch({ type: 'FAILED', payload: true });
    }

    // should send email+pass, verify pass on server, return username,
    // and then set user to logged in and set username to username
    // also get rid of failed state.

    // const verifyUser = await fetch(url, options);
    // if (postUser.status === 200) {
    //   dispatch({ type: 'USER', payload: data.username });
    //   dispatch({ type: 'LOGIN', payload: true });
    //   dispatch({ type: 'FAILED', payload: false });
    // } else {
    //   dispatch({ type: 'FAILED', payload: true });
    // }
  };

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            label="email"
            color="secondary"
            InputProps={{ className: classes.input }}
          />
        </Grid>
        <Grid item>
          <VisibilityOffIcon />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="password"
            color="secondary"
            InputProps={{ className: classes.input }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={verifyAccount}
          >
            login
          </Button>
        </Grid>
      </Grid>
      {failedLogin && <div className="failure">username or password incorrect</div>}
    </div>
  );
};

export default ExistingUser;
