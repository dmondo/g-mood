interface IState {
  user: string;
  currentPuzzle: any[];
  inputSquare: number[];
}

interface IAction {
  type: string;
  payload: any;
}
