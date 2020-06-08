import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Board from './Board';
import '../style/App.css';
import { Store } from '../store/Store';
import { solveBoard } from '../../lib/utils';

const test = [...Array(9)].map(() => Array(9).fill(''));

test[0][0] = 1;
test[1][5] = 8;

const App = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    const inProgress = test.map((row) => row.slice());
    const emptySolution = test.map((row) => row.slice());
    dispatch({ type: 'PUZZLE', payload: inProgress });
    dispatch({ type: 'START', payload: emptySolution });
  }, []);

  const getSolved = () => {
    const { startingPuzzle } = state;
    const solvedPuzzle = solveBoard(startingPuzzle);
    dispatch({ type: 'SOLUTION', payload: solvedPuzzle });
  };

  const removeSolved = () => {
    dispatch({ type: 'SOLUTION', payload: false });
  };

  return (
    <>
      <div className="title">
        sudokuJS
      </div>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item sm={6}>
            <Board solved={false} />
            <Button
              variant="contained"
              color="secondary"
              onClick={getSolved}
            >
              solve
            </Button>
          </Grid>
          <Grid item sm={6}>
            {state.solution && <Board solved />}
            {state.solution && (
              <Button
                variant="contained"
                color="primary"
                onClick={removeSolved}
              >
                hide
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
