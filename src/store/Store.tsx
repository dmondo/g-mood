import React from 'react';

const initialState: IState = {
  user: 'guest',
  currentPuzzle: [],
  startingPuzzle: [],
  inputSquare: [],
  solution: false,
  listeners: [],
  loginStatus: false,
  failedLogin: false,
  newUser: false,
  allPuzzles: [],
  token: '',
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'USER':
      return { ...state, user: action.payload };
    case 'START':
      return { ...state, startingPuzzle: action.payload };
    case 'PUZZLE':
      return { ...state, currentPuzzle: action.payload };
    case 'INPUT':
      return { ...state, inputSquare: action.payload };
    case 'SOLUTION':
      return { ...state, solution: action.payload };
    case 'LISTEN':
      return { ...state, listeners: action.payload };
    case 'LOGIN':
      return { ...state, loginStatus: action.payload };
    case 'FAILED':
      return { ...state, failedLogin: action.payload };
    case 'NEWUSER':
      return { ...state, newUser: action.payload };
    case 'PUZZLES':
      return { ...state, allPuzzles: action.payload };
    case 'TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: React.Props<React.ReactChild>): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { children } = props;
  return (
    <Store.Provider
      value={{ state, dispatch }}
    >
      {children}
    </Store.Provider>
  );
};
