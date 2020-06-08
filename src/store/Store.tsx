import React from 'react';

const initialState: IState = {
  user: '',
  currentPuzzle: [],
  startingPuzzle: [],
  inputSquare: [],
  solution: false,
  listeners: [],
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
