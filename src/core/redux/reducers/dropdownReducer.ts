import {  SelectOptionProps } from "../../interfaces/interface";
import * as actionTypes from "../actionTypes.ts";

const initialState = {
    departments: [],
    designations: [],
    empModes: [],
    skills: [],
    loading: true,
};

function dropdownReducer(
    state: any = initialState,
    action: {
        type: string;
        payload: SelectOptionProps[] | boolean;
    }
) {
    switch (action.type) {
        
        case actionTypes.SET_DEPARTMENTS:
            return { ...state, departments: action.payload };
        case actionTypes.SET_DESIGNATIONS:
            return { ...state, designations: action.payload };
        case actionTypes.SET_EMP_MODES:
            return { ...state, empModes: action.payload };
        case actionTypes.SET_SKILLS:
            return { ...state, skills: action.payload };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export default dropdownReducer;
