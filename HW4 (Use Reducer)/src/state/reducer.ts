import { IState, IStudent } from "../types";

type Action =
  | { type: "STORE_LOCAL_STORAGE"; payload: IStudent[] }
  | { type: "ADD_STUDENT"; payload: IStudent }
  | { type: "REMOVE_FIRST_STUDENT" }
  | { type: "ABSENT_CHANGE"; payload: { id: string; change: number } };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "STORE_LOCAL_STORAGE": {
      const list = action.payload || [];
      const total = list.reduce((prev, cur) => {
        return prev + cur.absents;
      }, 0);
      return {
        studentsList: list,
        totalAbsent:  total 
      };
    }
    case "ADD_STUDENT": 
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };
    

    case "REMOVE_FIRST_STUDENT": {
      const newList = [...state.studentsList];
      newList.shift();
      const total = newList.reduce((prev, cur) => {
        return prev + cur.absents;
      }, 0);
      return {
        studentsList: newList,
        totalAbsent: total,
      };
    }

    case "ABSENT_CHANGE": {
      const total = state.totalAbsent + action.payload.change;
      const newList = state.studentsList.map((std) =>
        std.id === action.payload.id
          ? { ...std, absents: std.absents + action.payload.change }
          : std
      );

      return {
        studentsList: newList,
        totalAbsent: total,
      };
    }
  }
};

export default reducer;
