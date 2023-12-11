import { Employee, } from "../../interfaces/interface";
import * as actionTypes from "../actionTypes.ts";

const initialState = {
    employees: [],
    loading: true,
    count: 0,
};

function employeeReducer(
    state = initialState,
    action: {
        type: string;
        payload: { employees: Employee[], count: number } | boolean;
    }
) {
    switch (action.type) {
        case actionTypes.SET_EMPLOYEES:
            return { ...state, employees: action.payload.employees, count: action.payload.count };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export default employeeReducer;
