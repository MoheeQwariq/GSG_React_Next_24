export interface IStudent {
  id: string;
  name: string;
  age: number;
  absents: number;
  isGraduated: boolean;
  coursesList: string[];
}

export interface IState {
  studentsList: IStudent[];
  totalAbsent: number;
}
