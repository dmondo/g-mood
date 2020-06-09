interface IState {
  user: string;
  currentPuzzle: (string|number)[][];
  startingPuzzle: (string|number)[][];
  inputSquare: number[];
  solution: boolean | number[][];
  listeners: IKeyListener[];
  loginStatus: boolean;
  failedLogin: boolean;
  newUser: boolean;
  allPuzzles: (string|number)[][][];
  token: string;
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

interface IUserName {
  username: string;
}

interface IUserCB {
  (err: Error, data?: IJWT, type?: string): void;
}

interface ISaveUser {
  (err: Error, type?: any): void;
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

interface IVerify {
  email: string;
  password: string;
}

interface IJWT {
  username: string;
  token: any;
}
