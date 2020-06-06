import React from 'react';

const initialState: IState = {
  user: '',
  currentPuzzle: [],
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'USER':
      return { ...state, user: action.payload };
    case 'PUZZLE':
      return { ...state, currentPuzzle: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
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
