interface IState {
  user: string;
  currentPuzzle: (string|number)[][];
  startingPuzzle: (string|number)[][];
  inputSquare: number[];
  solution: boolean | number[][];
  listeners: IKeyListener[];
}

interface IAction {
  type: string;
  payload: any;
}

interface IPuzzle {
  _id?: string;
  uuid: string;
  puzzle: (string|number)[][];
}

interface IExpressCB {
  (err: Error, data?: IPuzzle[]): void;
}

interface IKeyListener {
  (e: KeyboardEvent): void;
}

interface IMListener {
  (e: MouseEvent): void;
}
