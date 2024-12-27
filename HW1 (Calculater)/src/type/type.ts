export interface IButton {
  symbol: string;
  color: string;
  special?:boolean;
  onClick: (symbol: string) => void;
}

export interface IKeyboard {
  screen:string;
  setScreen:(exp:string) => void;
}

export interface IResult {
  screen:string;
}
