interface IState {
  user: string;
  currentPuzzle: (string|number)[][];
  startingPuzzle: (string|number)[][];
  inputSquare: number[];
  solution: boolean | number[][];
  listeners: IKeyListener[];
  loginStatus: boolean;
  failedLogin: boolean;
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

interface IPuzzleCB {
  (err: Error, data?: IPuzzle[]): void;
}

interface IUserCB {
  (err: Error, data?: IUser[]): void;
}

interface ISaveUser {
  (err: Error, type?: string): void;
}

interface IKeyListener {
  (e: KeyboardEvent): void;
}

interface IMListener {
  (e: MouseEvent): void;
}

interface IUser {
  username: string;
  email: string;
  password: string;
}
