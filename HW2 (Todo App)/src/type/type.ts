export interface Task {
  id: number;
  title: string;
  isUrgent: boolean;
  isDone: boolean;
}

export interface IForm {
  onSubmit: (task: Task) => void;
}

export interface ITodoDate {
  items: Task[];
}

export interface IItem {
  data: Task;
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete:()=> void;
}


export interface ITodos {
  items: Task[];
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete:(index:number)=> void;

}