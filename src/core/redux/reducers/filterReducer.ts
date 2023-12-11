import {TableProps } from "../../interfaces/interface";
import * as actionTypes from "../actionTypes.ts";

const initialState = {
    department: null,
    designation: null,
    employment_mode: null,
    skills: null,
    search_term: "",
};

function filterReducer(
    state: any = initialState,
    action: {
        type: string;
        payload: TableProps;
    }
) {
    switch (action.type) {

        case actionTypes.SET_TABLE_PROPS:
            return { ...state, tableProps: action.payload };
        default:
            return state;
    }
};

export default filterReducer;
