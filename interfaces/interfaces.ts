interface IState {
  user: string;
  currentPuzzle: any[];
}

interface IAction {
  type: string;
  payload: any;
}
