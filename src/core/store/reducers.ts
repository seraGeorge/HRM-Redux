// import { Employee, SelectOptionProps, SortDirection, TableProps } from "../interfaces/interface.ts";
// import * as actionTypes from "./actionTypes.ts";

// const initialState = {
//   employees: [],
//   departments: [],
//   designations: [],
//   empModes: [],
//   skills: [],
//   tableProps: {
//     department: null,
//     designation: null,
//     employment_mode: null,
//     skills: null,
//     sort: {
//       sortVal: SortDirection.NO_SORT,
//       sortTerm: "",
//     },
//     search_term: "",
//   },
//   loading: true,
// };

// function reducer(
//   state: any=initialState,
//   action: {
//     type: string;
//     payload: Employee[] | SelectOptionProps[] | TableProps|boolean;
//   }
// ) {
//   switch (action.type) {
//     case actionTypes.SET_DATA_EMPLOYEES:
//       return { ...state, dataEmployees: action.payload };
//     case actionTypes.SET_EMPLOYEES:
//       return { ...state, employees: action.payload };
//     case actionTypes.SET_DEPARTMENTS:
//       return { ...state, departments: action.payload };
//     case actionTypes.SET_DESIGNATIONS:
//       return { ...state, designations: action.payload };
//     case actionTypes.SET_EMP_MODES:
//       return { ...state, empModes: action.payload };
//     case actionTypes.SET_SKILLS:
//       return { ...state, skills: action.payload };
//     case actionTypes.SET_LOADING:
//       return { ...state, loading: action.payload };
//     case actionTypes.SET_TABLE_PROPS:
//       return { ...state, tableProps: action.payload };
//     default:
//       return state;
//   }
// };

// export default reducer;
