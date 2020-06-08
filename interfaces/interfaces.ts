interface IState {
  user: string;
  currentPuzzle: any[];
  startingPuzzle: any[];
  inputSquare: number[];
  solution: boolean | number[][];
  listeners: any[];
}

interface IAction {
  type: string;
  payload: any;
}
